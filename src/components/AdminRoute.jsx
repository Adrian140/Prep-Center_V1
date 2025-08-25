import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

function AdminRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuthentication();
    
    // Deconectare automată la închiderea tab-ului/browser-ului
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('adminAuth');
    };

    // Deconectare automată la schimbarea tab-ului
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sessionStorage.removeItem('adminAuth');
        setIsAuthenticated(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const checkAuthentication = async () => {
    try {
      // Check if we have stored auth
      const authData = sessionStorage.getItem('adminAuth');
      
      if (authData) {
        const { username, password, timestamp } = JSON.parse(authData);
        const now = Date.now();
        
        // Session expires after 1 hour of inactivity
        if (now - timestamp < 3600000) {
          await verifyCredentials(username, password);
        } else {
          sessionStorage.removeItem('adminAuth');
          promptForCredentials();
        }
      } else {
        promptForCredentials();
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      promptForCredentials();
    }
  };

  const promptForCredentials = () => {
    const username = prompt('Username Admin:');
    const password = prompt('Parolă Admin:');
    
    if (username && password) {
      verifyCredentials(username, password);
    } else {
      setError('Credențiale necesare pentru accesul admin');
      setIsLoading(false);
    }
  };

  const verifyCredentials = async (username, password) => {
    try {
      // Credențiale admin locale
      const ADMIN_USERNAME = 'admin';
      const ADMIN_PASSWORD = 'PrepCenter2024!';
      
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // Store credentials with timestamp for session management
        const authData = {
          username,
          password,
          timestamp: Date.now()
        };
        sessionStorage.setItem('adminAuth', JSON.stringify(authData));
        
        setIsAuthenticated(true);
        setError('');
      } else {
        setError('Username sau parolă incorectă');
        sessionStorage.removeItem('adminAuth');
        setTimeout(promptForCredentials, 1000);
      }
    } catch (error) {
      setError('Eroare de autentificare');
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-text-secondary">Verificare autentificare...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text-primary mb-4">Acces Restricționat</h1>
          <p className="text-text-secondary mb-6">{error}</p>
          <button
            onClick={() => {
              setError('');
              setIsLoading(true);
              checkAuthentication();
            }}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Încearcă din nou
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-text-primary mb-4">Autentificare Admin</h1>
          <p className="text-text-secondary">Verificare credențiale...</p>
        </div>
      </div>
    );
  }

  return children;
}

export default AdminRoute;
