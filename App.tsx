
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import UserDashboard from './pages/UserDashboard';
import SettingsPage from './pages/Settings';
import CarDetail from './pages/CarDetail';
import RouteGuard from './components/RouteGuard';
import { About, Privacy, Terms, Safety, Cookies, Copyright } from './pages/LegalPages';

// Layout manager to handle conditional public header visibility
const ApplicationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Protected routes starting with /dashboard use AppHeader (defined inside RouteGuard)
  const isProtectedArea = location.pathname.startsWith('/dashboard');

  return (
    <div className="flex flex-col min-h-screen">
      {!isProtectedArea && <Header />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ApplicationLayout>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/auth/login" element={<Auth mode="login" />} />
          <Route path="/auth/register" element={<Auth mode="register" />} />
          
          {/* Protected Application Space (Route Guard Gate) */}
          <Route path="/dashboard" element={
            <RouteGuard>
              <UserDashboard role="user" />
            </RouteGuard>
          } />
          
          <Route path="/dashboard/user" element={
            <RouteGuard allowedRoles={['user']}>
              <UserDashboard role="user" />
            </RouteGuard>
          } />
          
          <Route path="/dashboard/dealer" element={
            <RouteGuard allowedRoles={['dealer']}>
              <UserDashboard role="dealer" />
            </RouteGuard>
          } />
          
          <Route path="/dashboard/admin" element={
            <RouteGuard allowedRoles={['admin']}>
              <UserDashboard role="admin" />
            </RouteGuard>
          } />

          <Route path="/dashboard/settings" element={
            <RouteGuard>
              <SettingsPage />
            </RouteGuard>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ApplicationLayout>
    </Router>
  );
};

export default App;
