import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-library-50 to-accent-50 dark:from-slate-900 dark:to-slate-800">
      <nav className="bg-white dark:bg-slate-800 shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="heading-sm">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-smooth"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="card">
          <h2 className="heading-md mb-4">Welcome, {user?.username}!</h2>
          <p className="text-muted mb-6">
            This is your dashboard. More features coming soon...
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-compact bg-gradient-to-br from-library-50 to-library-100 dark:from-library-900/30 dark:to-library-800/30">
              <div className="text-3xl font-bold text-library-600">0</div>
              <p className="text-muted mt-2">Active Borrowings</p>
            </div>

            <div className="card-compact bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30">
              <div className="text-3xl font-bold text-primary-600">0</div>
              <p className="text-muted mt-2">Total Reviews</p>
            </div>

            <div className="card-compact bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/30 dark:to-accent-800/30">
              <div className="text-3xl font-bold text-accent-600">$0</div>
              <p className="text-muted mt-2">Outstanding Fines</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
