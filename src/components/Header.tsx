import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-4 lg:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-2xl lg:text-3xl font-bold">NETFLIX</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6 text-sm">
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-black/50 border border-white/20 text-white px-4 py-2 pr-10 rounded-sm focus:outline-none focus:border-white/60 w-64"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 text-white hover:text-gray-300"
                >
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell size={20} />
          </button>

          {/* Profile */}
          <div className="hidden lg:flex items-center space-x-2 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
            <ChevronDown size={16} className="text-white group-hover:rotate-180 transition-transform" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <ul className="px-4 py-4 space-y-3">
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors block">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors block">TV Shows</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors block">Movies</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors block">New & Popular</a></li>
            <li><a href="#" className="text-white hover:text-gray-300 transition-colors block">My List</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;