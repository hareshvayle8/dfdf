import React, { useState, useEffect, useCallback } from 'react';
import { View, Server, Protocol } from './types';
import { SERVERS, MOCK_USER } from './constants';
import WelcomeView from './views/WelcomeView';
import MainView from './views/MainView';
import ServersView from './views/ServersView';
import AccountView from './views/AccountView';
import SettingsView from './views/SettingsView';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>(SERVERS[0]);
  const [protocol, setProtocol] = useState<Protocol>(Protocol.WIREGUARD);
  const [autoConnect, setAutoConnect] = useState(true);
  const [killSwitch, setKillSwitch] = useState(true);
  const [userIp, setUserIp] = useState('192.168.1.1');

  useEffect(() => {
    if (isConnected) {
      setUserIp(`10.8.0.${Math.floor(Math.random() * 255)}`);
    } else {
      setUserIp('192.168.1.1');
    }
  }, [isConnected]);

  const handleToggleConnection = useCallback(() => {
    if (isConnected) {
      setIsConnected(false);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
      }, 1500);
    }
  }, [isConnected]);

  const navigate = (view: View) => setCurrentView(view);

  const renderView = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeView onStart={() => navigate(View.MAIN)} />;
      case View.MAIN:
        return (
          <MainView 
            isConnected={isConnected} 
            isConnecting={isConnecting} 
            onToggle={handleToggleConnection} 
            selectedServer={selectedServer}
            onSelectServer={() => navigate(View.SERVERS)}
            onOpenSettings={() => navigate(View.SETTINGS)}
            ipAddress={userIp}
          />
        );
      case View.SERVERS:
        return (
          <ServersView 
            selectedServerId={selectedServer.id}
            onSelect={(server) => {
              setSelectedServer(server);
              navigate(View.MAIN);
            }} 
            onBack={() => navigate(View.MAIN)}
          />
        );
      case View.ACCOUNT:
        return (
          <AccountView 
            user={MOCK_USER} 
            onBack={() => navigate(View.MAIN)}
            onEditProfile={() => alert('Profile editing is coming soon!')}
          />
        );
      case View.SETTINGS:
        return (
          <SettingsView 
            protocol={protocol}
            autoConnect={autoConnect}
            killSwitch={killSwitch}
            onSetProtocol={setProtocol}
            onSetAutoConnect={setAutoConnect}
            onSetKillSwitch={setKillSwitch}
            onBack={() => navigate(View.MAIN)}
            onLogout={() => {
              setIsConnected(false);
              alert('Settings have been cleared.');
            }}
          />
        );
      default:
        return <MainView 
          isConnected={isConnected} 
          isConnecting={isConnecting} 
          onToggle={handleToggleConnection} 
          selectedServer={selectedServer}
          onSelectServer={() => navigate(View.SERVERS)}
          onOpenSettings={() => navigate(View.SETTINGS)}
          ipAddress={userIp}
        />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative overflow-hidden bg-background-light dark:bg-background-dark shadow-2xl">
      <main className="flex-1 flex flex-col overflow-y-auto pb-24 no-scrollbar">
        {renderView()}
      </main>
      
      {currentView !== View.WELCOME && (
        <BottomNav 
          currentView={currentView} 
          onNavigate={navigate} 
        />
      )}
    </div>
  );
};

export default App;