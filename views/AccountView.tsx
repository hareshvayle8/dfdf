import React from 'react';
import { User } from '../types';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

interface AccountViewProps {
  user: User;
  onBack: () => void;
  onEditProfile: () => void;
}

const AccountView: React.FC<AccountViewProps> = ({ user, onBack, onEditProfile }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-10">
      <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800/50">
        <button onClick={onBack} className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-gray-900 dark:text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight flex-1 text-center pr-10">My Account</h2>
      </div>

      <div className="flex-1 flex flex-col gap-6 p-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <div className="relative">
            <div className="relative p-1 rounded-full border-2 border-primary border-dashed">
              <div 
                className="h-28 w-28 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: `url('https://picsum.photos/id/64/200/200')` }}
              ></div>
            </div>
            <div className="absolute bottom-1 right-1 bg-green-500 border-4 border-background-light dark:border-background-dark w-7 h-7 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[16px]">check</span>
            </div>
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{user.email}</p>
            <div className="flex items-center justify-center gap-1 mt-1">
              <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
              <p className="text-primary text-xs font-bold uppercase tracking-wider">Free Lifetime Access • Since {user.memberSince}</p>
            </div>
          </div>
          <button 
            onClick={onEditProfile}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">edit</span>
            <span className="text-sm font-bold">Edit Profile</span>
          </button>
        </div>

        {/* Free Plan Status Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 flex items-center gap-4">
          <div className="size-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-white">volunteer_activism</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">Zenith Free Plan</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Unlimited data and all servers are free to use for you.</p>
          </div>
        </div>

        {/* Data Usage Chart */}
        <div className="rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-base font-bold">Encrypted Traffic</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">Usage breakdown (Last 30 Days)</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{user.usage.totalGb} GB</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Protected</p>
            </div>
          </div>
          
          <div className="h-40 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={user.usage.history}>
                <defs>
                  <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1152d4" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1152d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e2433', borderRadius: '12px', border: 'none', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#1152d4" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorAmt)" 
                />
                <XAxis dataKey="date" hide />
                <YAxis hide />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </div>

        {/* Action Group */}
        <div className="flex flex-col gap-2">
          <button className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 group transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400">
                <span className="material-symbols-outlined">security</span>
              </div>
              <span className="font-bold">Two-Factor Authentication</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-green-500">ENABLED</span>
              <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
            </div>
          </button>
          
          <button className="flex items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-gray-100 dark:border-gray-800 group transition-colors hover:bg-gray-50 dark:hover:bg-white/5">
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                <span className="material-symbols-outlined">info</span>
              </div>
              <span className="font-bold">About Zenith VPN</span>
            </div>
            <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountView;