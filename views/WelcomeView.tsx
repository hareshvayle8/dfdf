
import React from 'react';

interface WelcomeViewProps {
  onStart: () => void;
}

const WelcomeView: React.FC<WelcomeViewProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark font-display">
      <div className="flex w-full grow bg-background-light dark:bg-background-dark py-3">
        <div 
          className="w-full bg-center bg-no-repeat bg-cover aspect-[3/2] flex"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxQLWZWPsAQAjZ05K0DiYReW14LPYWnytT9VAR7njfFPs5PI-hjt6wfTsXT9eLxUlsC74VzekObNvzpsziFCefTfBWSENwHSkO7ey_wSeYxCsxC60FGe8fM841rmLBzGGVinmPwBUvcyxyKCUEhh6i7CvvkQ7HDMD262wURg78pMCeCLfmk8KiL4tQ_HwvbVD_2FSfrdPVLFy2bsDZB8TyUGnSBdw-zditYvVYnRNqpzN4aUBjHraWFt6_zVS-P0LwvNEZJBc1X_pb")`,
            backgroundPosition: 'center 40%'
          }}
        ></div>
      </div>
      
      <div className="px-4 text-center">
        <h1 className="text-zinc-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-3 pt-6">
          Your Online Freedom, Secured.
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-base font-normal leading-normal pb-3 pt-1">
          Zenith VPN provides enterprise-grade encryption and global access with just one tap.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4">
        {[
          { icon: 'shield', label: 'Ultimate Privacy' },
          { icon: 'bolt', label: 'Blazing Fast' },
          { icon: 'public', label: 'Global Access' }
        ].map((feature, i) => (
          <div key={i} className="flex gap-3 rounded-lg border border-zinc-200 dark:border-[#324467] bg-white dark:bg-[#192233] p-4 items-center">
            <span className="material-symbols-outlined text-primary">{feature.icon}</span>
            <h2 className="text-zinc-900 dark:text-white text-sm font-bold leading-tight">{feature.label}</h2>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 px-4 py-8">
        <button 
          onClick={onStart}
          className="w-full bg-primary text-white font-bold py-4 px-6 rounded-xl text-lg shadow-lg shadow-primary/20 active:scale-95 transition-transform"
        >
          Get Started
        </button>
        <button onClick={onStart} className="text-zinc-600 dark:text-zinc-400 text-sm">
          Already have an account? <span className="font-bold text-primary">Log In</span>
        </button>
      </div>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
        <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-[#324467]"></div>
        <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-[#324467]"></div>
      </div>
    </div>
  );
};

export default WelcomeView;
