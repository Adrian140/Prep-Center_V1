import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuthStatus();
    
    // Deconectare automată la închiderea tab-ului/browser-ului
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('adminAuth');
      setIsAdminAuthenticated(false);
    };

    // Deconectare automată la schimbarea tab-ului
    const handleVisibilityChange = () => {
      if (document.hidden) {
        sessionStorage.removeItem('adminAuth');
        setIsAdminAuthenticated(false);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const checkAuthStatus = () => {
    const authData = sessionStorage.getItem('adminAuth');
    
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        const now = Date.now();
        
        // Session expires after 1 hour
        if (now - timestamp < 3600000) {
          setIsAdminAuthenticated(true);
        } else {
          sessionStorage.removeItem('adminAuth');
          setIsAdminAuthenticated(false);
        }
      } catch (error) {
        sessionStorage.removeItem('adminAuth');
        setIsAdminAuthenticated(false);
      }
    }
  };

  const adminLogin = async (username, password) => {
    setLoading(true);
    
    // Simulez o întârziere pentru autentificare
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Credențiale admin locale
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'PrepCenter2024!';
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const authData = {
        username,
        password,
        timestamp: Date.now()
      };
      
      sessionStorage.setItem('adminAuth', JSON.stringify(authData));
      setIsAdminAuthenticated(true);
      setLoading(false);
      return { success: true };
    } else {
      setLoading(false);
      return { success: false, error: 'Username sau parolă incorectă' };
    }
  };

  const adminLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAdminAuthenticated(false);
  };

  const value = {
    isAdminAuthenticated,
    loading,
    adminLogin,
    adminLogout
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
