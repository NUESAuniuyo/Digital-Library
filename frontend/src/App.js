import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import LandingPage from './pages/LandingPage';
import DepartmentsPage from './pages/DepartmentsPage';
import DepartmentDetail from './pages/DepartmentDetail';
import CoursePage from './pages/CoursePage';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:departmentId" element={<DepartmentDetail />} />
            <Route path="/departments/:departmentId/course/:courseId" element={<CoursePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
