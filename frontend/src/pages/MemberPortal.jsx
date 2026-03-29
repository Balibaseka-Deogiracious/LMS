import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen,
  Book, 
  Clock, 
  DollarSign, 
  Bell, 
  Search, 
  User,
  GraduationCap,
  LogOut,
  ChevronDown,
  Filter,
  Settings,
  History
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

const MemberPortal = () => {
  const { user, logout } = useAuth();
  const { isDark } = useTheme();
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeFilter, setActiveCategory] = useState('All');

  const memberDetails = {
    studentId: user?.studentId || "240080737",
    program: user?.program || "Bachelor of Science in Computer Science",
    yearOfStudy: "Year 2, Semester 2",
  };

  const books = [
    { id: 1, title: 'Things Fall Apart', author: 'Chinua Achebe', category: 'Fiction', status: 'Available', fine_per_day: 500 },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', status: 'Borrowed', fine_per_day: 1000 },
    { id: 3, title: 'Kintu', author: 'Jennifer Makumbi', category: 'Fiction', status: 'Available', fine_per_day: 500 },
    { id: 4, title: 'The River Between', author: 'Ngũgĩ wa Thiong\'o', category: 'Academic', status: 'Available', fine_per_day: 700 },
    { id: 5, title: 'Data Structures', author: 'N. Karumanchi', category: 'Technology', status: 'Available', fine_per_day: 800 },
    { id: 6, title: 'Tropical Fish', author: 'Doreen Baingana', category: 'Fiction', status: 'Available', fine_per_day: 500 },
  ];

  const filteredBooks = books.filter(b => 
    (selectedCategory === 'All' || b.category === selectedCategory) &&
    (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''} bg-slate-50 dark:bg-slate-950 font-outfit`}>
      {/* Transparent Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">LMS</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            
            <div className="relative">
              <button 
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm">
                  {user?.username?.[0].toUpperCase()}
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 hidden sm:inline">{user?.username}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isAccountOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* KYU Space Style Dropdown */}
              {isAccountOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-fade-in">
                  <div className="p-6 bg-gradient-to-br from-sky-600 to-blue-700 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Student Account</p>
                    <h3 className="text-lg font-bold">{user?.first_name} {user?.last_name}</h3>
                    <p className="text-sm opacity-90 truncate">{user?.email}</p>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Loans</p>
                        <p className="text-lg font-bold text-sky-600">3</p>
                      </div>
                      <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Fines</p>
                        <p className="text-lg font-bold text-rose-600">2.5k</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3 p-2 text-sm text-slate-600 dark:text-slate-400">
                        <GraduationCap className="w-4 h-4" /> <span>{memberDetails.studentId}</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 text-sm text-slate-600 dark:text-slate-400">
                        <Book className="w-4 h-4" /> <span className="truncate">{memberDetails.program}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1">
                      <Link to="/settings" className="flex items-center gap-3 p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                        <Settings className="w-4 h-4" /> Account Settings
                      </Link>
                      <Link to="/borrowing-history" className="flex items-center gap-3 p-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                        <History className="w-4 h-4" /> Borrowing History
                      </Link>
                      <button onClick={logout} className="w-full flex items-center gap-3 p-2 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg">
                        <LogOut className="w-4 h-4" /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <div className="relative h-[550px] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1481627564523-4a7c3994ef24?q=80&w=2070&auto=format&fit=crop" 
            alt="Library" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-50 dark:to-slate-950 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-5xl px-4 text-center space-y-10 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.15em] uppercase leading-tight">
              Explore the Universe of Knowledge
            </h2>
            <p className="text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
              Access thousands of academic resources, research journals, and local literature at your fingertips.
            </p>
          </div>

          {/* Prominent Search Bar */}
          <div className="bg-white/95 dark:bg-slate-900/95 p-2 rounded-[50px] shadow-2xl shadow-sky-900/20 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto ring-1 ring-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by title, author, or ISBN..." 
                className="w-full h-14 pl-14 pr-4 bg-transparent border-none focus:ring-0 focus:outline-none text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="h-14 w-[1px] bg-slate-100 dark:bg-slate-800 hidden md:block"></div>
            <div className="relative min-w-[180px]">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <select 
                className="w-full h-14 pl-10 pr-8 bg-transparent border-none focus:ring-0 focus:outline-none text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Fiction">Fiction</option>
                <option value="Technology">Technology</option>
                <option value="Academic">Academic</option>
              </select>
            </div>
            <button className="h-14 px-10 bg-sky-600 hover:bg-sky-700 text-white rounded-[50px] font-bold transition-all shadow-lg shadow-sky-600/20 uppercase tracking-widest">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Browse Section */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {searchQuery ? `Search Results (${filteredBooks.length})` : 'Popular in Catalog'}
          </h2>
          <div className="flex gap-2">
            {['All', 'Available', 'Recently Added'].map(tag => (
              <button 
                key={tag} 
                onClick={() => setActiveCategory(tag)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full border transition-all ${
                  activeFilter === tag 
                    ? 'bg-sky-600 border-sky-600 text-white shadow-lg shadow-sky-600/20' 
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-sky-600 hover:text-sky-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layoutId="book-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.map(book => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <BookCard book={book} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <div className="py-24 text-center space-y-4 bg-white dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 shadow-inner">
            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">No matches found</h3>
            <p className="text-slate-500 max-w-sm mx-auto">We couldn't find any resources matching your search. Try broadening your keywords.</p>
          </div>
        )}
      </main>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <p>© 2024 Kyambogo University Library Services</p>
        <div className="flex gap-6">
          <Link to="/faq" className="hover:text-sky-600">Help Center</Link>
          <Link to="/terms" className="hover:text-sky-600">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-sky-600">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default MemberPortal;