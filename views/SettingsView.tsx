import React from 'react';
import { Protocol } from '../types';

interface SettingsViewProps {
  protocol: Protocol;
  autoConnect: boolean;
  killSwitch: boolean;
  onSetProtocol: (p: Protocol) => void;
  onSetAutoConnect: (v: boolean) => void;
  onSetKillSwitch: (v: boolean) => void;
  onBack: () => void;
  onLogout: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  protocol, autoConnect, killSwitch, onSetProtocol, onSetAutoConnect, onSetKillSwitch, onBack
}) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-800/50">
        <button onClick={onBack} className="flex size-12 shrink-0 items-center justify-center text-gray-900 dark:text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Settings</h2>
      </div>

      <div className="px-4 pb-10">
        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight pb-3 pt-5">General Settings</h2>
        
        <div className="flex items-center gap-4 min-h-14 justify-between py-3">
          <p className="text-gray-900 dark:text-white text-base font-medium flex-1">Auto-connect on startup</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={autoConnect} 
              onChange={(e) => onSetAutoConnect(e.target.checked)}
              className="sr-only peer" 
            />
            <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary rounded-full"></div>
          </label>
        </div>

        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight pb-3 pt-8">Connection</h2>
        
        <div className="flex items-center gap-4 min-h-14 justify-between py-3">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 shrink-0 size-10">
              <span className="material-symbols-outlined">gpp_good</span>
            </div>
            <p className="text-gray-900 dark:text-white text-base font-medium">Network Kill Switch</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={killSwitch} 
              onChange={(e) => onSetKillSwitch(e.target.checked)}
              className="sr-only peer" 
            />
            <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary rounded-full"></div>
          </label>
        </div>

        <button 
          onClick={() => {
            const protocols = Object.values(Protocol);
            const idx = protocols.indexOf(protocol);
            onSetProtocol(protocols[(idx + 1) % protocols.length]);
          }}
          className="flex items-center gap-4 min-h-14 justify-between py-3 w-full text-left"
        >
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 shrink-0 size-10">
              <span className="material-symbols-outlined">shield_lock</span>
            </div>
            <p className="text-gray-900 dark:text-white text-base font-medium">VPN Protocol</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm font-bold uppercase">{protocol}</span>
            <span className="material-symbols-outlined text-gray-400">chevron_right</span>
          </div>
        </button>

        <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight pb-3 pt-8">Support</h2>
        
        <button className="flex items-center gap-4 min-h-14 justify-between py-3 w-full">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-500 shrink-0 size-10">
              <span className="material-symbols-outlined">help_outline</span>
            </div>
            <p className="text-gray-900 dark:text-white text-base font-medium">Help Center</p>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </button>

        <button className="flex items-center gap-4 min-h-14 justify-between py-3 w-full">
          <div className="flex items-center gap-4">
            <div className="text-white flex items-center justify-center rounded-lg bg-green-500/10 text-green-500 shrink-0 size-10">
              <span className="material-symbols-outlined">description</span>
            </div>
            <p className="text-gray-900 dark:text-white text-base font-medium">Privacy Policy</p>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </button>

        <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800 text-center">
           <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">App Version 2.4.1 (Build 8902)</p>
           <p className="text-gray-400 text-[10px] mt-2">Zenith Security Labs © 2024</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;