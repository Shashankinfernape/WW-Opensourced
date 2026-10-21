import React, { useState, useEffect } from 'react';
import { ChatShell } from './components/ChatShell';
import { LoginView } from './components/LoginView';

export const App: React.FC = () => {
  const [view, setView] = useState<'chat' | 'login'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('view') === 'login' || window.location.hash === '#login') {
        return 'login';
      }
    }
    return 'chat';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#login') {
        setView('login');
      } else if (window.location.hash === '#chat') {
        setView('chat');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {view === 'chat' ? (
        <ChatShell onBackToLogin={() => setView('login')} />
      ) : (
        <LoginView onOpenChat={() => setView('chat')} />
      )}
    </div>
  );
};

export default App;
