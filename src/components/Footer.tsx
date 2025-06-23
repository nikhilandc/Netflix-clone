import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-16 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex space-x-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media Center</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ways to Watch</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Speed Test</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Legal Notices</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Only on Netflix</a></li>
            </ul>
          </div>
        </div>

        {/* Service Code */}
        <div className="mb-8">
          <button className="border border-gray-600 text-gray-400 px-4 py-2 text-sm hover:border-gray-400 transition-colors">
            Service Code
          </button>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          © 2024 Netflix Clone. Built with React and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;