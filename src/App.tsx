import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import { Footer } from './components/layout/Footer';
import { Navigation } from './components/layout/Navigation';
import Education from './pages/Education';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Projects as ProjectsPage } from './pages/Projects';

function App ()
{
  return (
    <Router>
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
