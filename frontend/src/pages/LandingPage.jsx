import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, BookOpen, Users, Zap, Globe, Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-50 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-library rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-library-600 to-primary-500 bg-clip-text text-transparent">
                LMS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-library-600 transition-smooth">
                Features
              </a>
              <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-library-600 transition-smooth">
                About
              </a>
              <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-library-600 transition-smooth">
                Contact
              </a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-smooth"
              >
                {isDark ? '🌙' : '☀️'}
              </button>

              <Link
                to="/login"
                className="hidden sm:inline-block px-4 py-2 rounded-lg text-library-600 hover:bg-library-50 dark:hover:bg-library-900 transition-smooth font-medium"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hidden sm:inline-block px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-smooth font-medium"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <ChevronDown className={`w-5 h-5 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-700 dark:text-slate-300 hover:text-library-600">
                Features
              </a>
              <a href="#about" className="block text-slate-700 dark:text-slate-300 hover:text-library-600">
                About
              </a>
              <Link to="/login" className="block text-slate-700 dark:text-slate-300 hover:text-library-600">
                Login
              </Link>
              <Link to="/register" className="block w-full px-4 py-2 bg-gradient-primary text-white rounded-lg text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-library-50 to-accent-50 dark:from-slate-900 dark:to-slate-800 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-library-100 dark:bg-library-900 text-library-700 dark:text-library-300 rounded-full text-sm font-semibold">
                  ✨ Next-Gen Library Management
                </span>
              </div>

              <h1 className="heading-lg">
                Discover, Borrow & Manage
                <span className="bg-gradient-to-r from-library-600 to-primary-500 bg-clip-text text-transparent">
                  {' '}Your Library
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                LMS combines the institutional power of Greenstone with modern analytics from KYU Space. 
                A beautiful, intuitive platform for librarians and members.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-smooth"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-library-500 text-library-600 dark:text-library-400 rounded-lg font-semibold hover:bg-library-50 dark:hover:bg-library-900 transition-smooth"
                >
                  Learn More
                </a>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">4.9/5 from 200+ libraries</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hidden md:block space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-library-500 to-primary-500 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 shadow-2xl border border-white/10">
                  <div className="space-y-4">
                    <div className="h-3 bg-library-300 dark:bg-library-600 rounded w-32"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="h-12 bg-gradient-library rounded"></div>
                      <div className="h-12 bg-gradient-primary rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Powerful Features</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to manage your library efficiently and beautifully
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: 'Smart Catalog',
                description: 'Browse and search your library with advanced filters, categories, and recommendations',
                color: 'library',
              },
              {
                icon: Users,
                title: 'Member Management',
                description: 'Manage borrowing history, reservations, fines, and user profiles seamlessly',
                color: 'primary',
              },
              {
                icon: Zap,
                title: 'Real-time Analytics',
                description: 'Librarians get powerful dashboards with borrowing trends and inventory insights',
                color: 'accent',
              },
              {
                icon: Globe,
                title: 'Global Access',
                description: 'Access your library from anywhere, anytime with our mobile-friendly platform',
                color: 'library',
              },
              {
                icon: Star,
                title: 'Community Reviews',
                description: 'Members can rate and review books to help others discover great reads',
                color: 'primary',
              },
              {
                icon: BookOpen,
                title: 'Wishlist & Notifications',
                description: 'Save books for later and get instant alerts about reservations and renewals',
                color: 'accent',
              },
            ].map((feature, idx) => (
              <div key={idx} className="card group hover:scale-105 transition-smooth">
                <div className={`w-12 h-12 bg-${feature.color}-100 dark:bg-${feature.color}-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="heading-sm mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-library">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-md text-white mb-4">Ready to Transform Your Library?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of libraries using LMS to engage members and streamline operations
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-library-600 rounded-lg font-semibold hover:shadow-lg transition-smooth"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-library-600 transition-smooth">Features</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-library-600 transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-library-600 transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Terms</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h3>
              <ul className="space-y-2 text-muted">
                <li><a href="#" className="hover:text-library-600 transition-smooth">Twitter</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">GitHub</a></li>
                <li><a href="#" className="hover:text-library-600 transition-smooth">LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted mb-4 md:mb-0">&copy; 2024 LMS. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-muted hover:text-library-600 transition-smooth">Privacy Policy</a>
              <a href="#" className="text-muted hover:text-library-600 transition-smooth">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
