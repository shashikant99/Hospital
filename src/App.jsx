import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import TreatmentsPage from './pages/TreatmentsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/treatments" element={<TreatmentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Page not found</p>
              <a href="/" className="text-primary hover:underline">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;