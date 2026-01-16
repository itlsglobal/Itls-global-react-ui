import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login';
import Registration from './Components/Registration';
import TopicSelection from './Components/TopicSelection';
import QuizPage from './Components/QuizPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import CareerPage from './Components/CareerPage';
import BlogPage from './Components/BlogPage';
import ScrollToTop from './Components/ScrollToTop';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/topics" element={<TopicSelection />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  )
}

export default App
