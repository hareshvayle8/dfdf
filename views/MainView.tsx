
import React from 'react';
import { Server } from '../types';

interface MainViewProps {
  isConnected: boolean;
  isConnecting: boolean;
  onToggle: () => void;
  selectedServer: Server;
  onSelectServer: () => void;
  onOpenSettings: () => void;
  ipAddress: string;
}

const MainView: React.FC<MainViewProps> = ({ 
  isConnected, 
  isConnecting, 
  onToggle, 
  selectedServer,
  onSelectServer,
  onOpenSettings,
  ipAddress
}) => {
  return (
    <div className="flex flex-col h-full dark">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="text-white flex size-12 shrink-0 items-center">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </div>
        <div className="flex w-12 items-center justify-end">
          <button 
            onClick={onOpenSettings}
            className="flex cursor-pointer items-center justify-center rounded-xl h-12 bg-transparent text-white p-0"
          >
            <span className="material-symbols-outlined text-3xl">settings</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow px-4 text-center py-10">
        <h2 className="text-white tracking-light text-[28px] font-bold leading-tight">
          {isConnecting ? 'Connecting...' : isConnected ? 'Connected' : 'Disconnected'}
        </h2>
        <p className={`text-base font-normal leading-normal pb-10 pt-1 ${isConnected ? 'text-success' : 'text-accent'}`}>
          {isConnecting ? 'Initializing secure tunnel...' : isConnected ? 'Your connection is private' : 'Your connection is not secure'}
        </p>
        
        <div className="relative flex items-center justify-center w-64 h-64 mb-10">
          <div className={`absolute inset-0 rounded-full bg-primary/20 transition-all duration-1000 ${isConnected || isConnecting ? 'scale-110 opacity-100 animate-pulse-slow' : 'scale-75 opacity-0'}`}></div>
          <button 
            disabled={isConnecting}
            onClick={onToggle}
            className={`relative flex items-center justify-center w-52 h-52 rounded-full shadow-2xl transition-all duration-500 transform active:scale-90 ${
              isConnecting ? 'bg-primary/50' : isConnected ? 'bg-success' : 'bg-primary'
            } text-white`}
          >
            {isConnecting ? (
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className={`material-symbols-outlined text-8xl ${isConnected ? 'fill-icon' : ''}`}>
                power_settings_new
              </span>
            )}
          </button>
        </div>
        
        <div className="bg-[#2C2C2E]/50 px-4 py-2 rounded-full border border-white/5">
          <p className="text-accent text-sm font-medium tracking-wide">Your IP: <span className="text-white font-mono">{ipAddress}</span></p>
        </div>
      </div>

      <div className="px-4 pb-8">
        <div 
          onClick={onSelectServer}
          className="flex items-center gap-4 bg-[#2C2C2E] p-4 rounded-2xl cursor-pointer hover:bg-[#3C3C3E] transition-colors border border-white/5"
        >
          <div className="text-white flex items-center justify-center rounded-xl bg-primary/30 shrink-0 size-14 text-2xl">
            {selectedServer.flag}
          </div>
          <div className="flex-1">
            <p className="text-white text-base font-bold leading-tight">{selectedServer.name}</p>
            <p className="text-accent text-sm font-normal">{selectedServer.city} • {selectedServer.ping}ms</p>
          </div>
          <div className="shrink-0">
            <span className="material-symbols-outlined text-white text-3xl">chevron_right</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainView;
