import React, { useState } from 'react';
import { Server } from '../types';
import { SERVERS } from '../constants';

interface ServersViewProps {
  selectedServerId: string;
  onSelect: (server: Server) => void;
  onBack: () => void;
}

const ServersView: React.FC<ServersViewProps> = ({ selectedServerId, onSelect, onBack }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'recommended'>('all');

  const filteredServers = SERVERS.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.city.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || s.recommended;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <div className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark sticky top-0 z-10">
        <button onClick={onBack} className="flex size-12 shrink-0 items-center justify-center text-gray-900 dark:text-white">
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-tight flex-1 text-center">Select Server</h1>
        <div className="w-12"></div>
      </div>

      <div className="px-4 py-3">
        <div className="flex w-full items-stretch rounded-xl h-12 bg-slate-100 dark:bg-slate-800 border-none">
          <div className="text-slate-400 flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-none text-gray-900 dark:text-white focus:ring-0 px-4 text-base placeholder:text-slate-400" 
            placeholder="Search for a country or city..." 
          />
        </div>
      </div>

      <div className="flex gap-3 p-4 overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setFilter('all')}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-6 transition-colors ${filter === 'all' ? 'bg-primary text-white font-bold' : 'bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white font-medium'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('recommended')}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-6 transition-colors ${filter === 'recommended' ? 'bg-primary text-white font-bold' : 'bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-white font-medium'}`}
        >
          Recommended
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold pb-4 pt-2">Servers</h2>
        <div className="flex flex-col gap-2">
          {filteredServers.map((server) => (
            <div 
              key={server.id}
              onClick={() => onSelect(server)}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer border transition-all ${
                selectedServerId === server.id 
                  ? 'bg-primary/10 border-primary' 
                  : 'bg-white dark:bg-slate-800/40 border-transparent hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              <div className="shrink-0 size-12 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-3xl shadow-sm">
                {server.flag}
              </div>
              <div className="flex-1">
                <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">{server.name}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{server.city}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${server.ping < 100 ? 'bg-success' : server.ping < 200 ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">{server.ping}ms</p>
              </div>
            </div>
          ))}
          {filteredServers.length === 0 && (
            <div className="py-20 text-center">
              <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700">search_off</span>
              <p className="text-slate-500 mt-2">No servers found for "{search}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServersView;