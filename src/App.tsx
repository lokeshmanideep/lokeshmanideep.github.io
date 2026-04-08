import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Chat from './components/Chat';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { pageview } from './data/analytics';
import Education from './pages/Education';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects as ProjectsPage } from './pages/Projects';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
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
