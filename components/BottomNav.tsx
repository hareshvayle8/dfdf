import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { id: View.MAIN, icon: 'shield', label: 'VPN' },
    { id: View.SERVERS, icon: 'public', label: 'Locations' },
    { id: View.ACCOUNT, icon: 'person', label: 'Account' },
    { id: View.SETTINGS, icon: 'settings', label: 'Settings' },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800/50 pb-5 pt-2 px-6 z-50">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 p-2 transition-colors ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? 'fill-icon' : ''}`}>
                {item.icon}
              </span>
              <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;