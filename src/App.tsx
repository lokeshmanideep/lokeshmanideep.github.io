import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Chat from './components/Chat';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { pageview } from './data/analytics';
import { portfolioData } from './data/portfolio';
import Education from './pages/Education';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects as ProjectsPage } from './pages/Projects';

const defaultTitle = 'Lokesh Boggavarapu - Senior Software & AI Engineer';

const getRouteTitle = (pathname: string) => {
  if (pathname === '/') {
    return defaultTitle;
  }

  if (pathname === '/projects') {
    return 'Projects | Lokesh Boggavarapu';
  }

  if (pathname === '/education') {
    return 'Education | Lokesh Boggavarapu';
  }

  if (pathname.startsWith('/projects/')) {
    const projectId = pathname.replace('/projects/', '');
    const project = portfolioData.projects.find((item) => item.id === projectId);
    return project
      ? `${project.title} | Lokesh Boggavarapu`
      : 'Project | Lokesh Boggavarapu';
  }

  return defaultTitle;
};

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    document.title = getRouteTitle(location.pathname);
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));

      window.requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

function App ()
{
  return (
    <Router>
      <Analytics />
      <ScrollManager />
      <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-strong)]">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Footer />
            </>
          } />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
        <Chat />
      </div>
    </Router>
  );
}

export default App;
