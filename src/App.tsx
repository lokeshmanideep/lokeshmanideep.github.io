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
  }, [location]);

  return null;
}

function App ()
{
  return (
    <Router>
      <Analytics />
      <div className="min-h-screen bg-white">
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
