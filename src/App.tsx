import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects as ProjectsPage } from './pages/Projects';

function App ()
{
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navigation />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
