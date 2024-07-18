import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { useEffect } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/Services';
import ProjectsPage from './components/Projects';
import BlogPage from './components/Blog';

function App() {
  // const RedirectToHome = () => {
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     navigate('/');
  //   }, [navigate]);
  //   return null;
  // };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
