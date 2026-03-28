import React from 'react';

const WelcomeBanner = ({ userName, userRole = 'member', primaryText, secondaryText, stats }) => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="rounded-2xl bg-sky-500 dark:bg-sky-900/40 p-4 sm:p-6 md:p-8 mb-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {getGreeting()}, {userName}!
        </h2>
        <p className="text-sky-100 text-lg mt-2">
          {primaryText || 'Welcome back to your library management system'}
        </p>
        {secondaryText && (
          <p className="text-sky-100/80 mt-2">{secondaryText}</p>
        )}

        {/* Stats Row - Optional */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="text-sky-100 text-xs font-medium">{stat.label}</p>
                <p className="text-white text-lg font-bold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeBanner;
