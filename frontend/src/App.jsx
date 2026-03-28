import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Pages (will be created)
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import VerifyEmailPage from './pages/VerifyEmailPage';
import Dashboard from './pages/Dashboard';
import LibrarianDashboard from './pages/LibrarianDashboard';
import BrowseBooks from './pages/BrowseBooks';
import MyLibrary from './pages/MyLibrary';
import BookDetails from './pages/BookDetails';
import ManageBooks from './pages/ManageBooks';
import ManageUsers from './pages/ManageUsers';
import ManageCategories from './pages/ManageCategories';
import ReportsPage from './pages/ReportsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import FAQPage from './pages/FAQPage';
import BorrowingHistoryPage from './pages/BorrowingHistoryPage';
import NotFoundPage from './pages/NotFoundPage';
import WishlistPage from './pages/WishlistPage';
import AdvancedSearchPage from './pages/AdvancedSearchPage';
import ReservationPage from './pages/ReservationPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import AboutPage from './pages/AboutPage';
import ScrollToTop from './pages/ScrollToTop';

// Components
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />

            {/* Protected Routes - Now Public */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/librarian" element={<LibrarianDashboard />} />
            <Route path="/books" element={<BrowseBooks />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/my-library" element={<MyLibrary />} />
            
            {/* Librarian Only Routes - Now Public */}
            <Route path="/manage-books" element={<ManageBooks />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/manage-categories" element={<ManageCategories />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/history" element={<div className="p-8">Transaction History (Coming Soon)</div>} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            
            {/* Phase 1 - New Pages - Now Public */}
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/borrowing-history" element={<BorrowingHistoryPage />} />
            
            {/* Phase 2 - Advanced Features - Now Public */}
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/advanced-search" element={<AdvancedSearchPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            
            {/* Phase 3 - Static Pages & Legal */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
