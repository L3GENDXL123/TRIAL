import React from 'react';
import { DevicePhoneMobileIcon } from './icons/DevicePhoneMobileIcon';

interface HeaderProps {
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-surface/80 backdrop-blur-sm sticky top-0 z-40 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
            <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-text-primary tracking-tight">
              Gemini Phones
            </span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => onNavigate('new-arrivals')} className="text-text-secondary hover:text-text-primary transition-colors duration-300">New Arrivals</button>
            <button onClick={() => onNavigate('deals')} className="text-text-secondary hover:text-text-primary transition-colors duration-300">Deals</button>
            <button onClick={() => onNavigate('brands')} className="text-text-secondary hover:text-text-primary transition-colors duration-300">Brands</button>
            <a href="#recommender" onClick={() => onNavigate('home')} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">AI Recommender</a>
          </nav>
          <button className="md:hidden text-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
