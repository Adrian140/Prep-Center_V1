import React, { createContext, useContext, useState, useEffect } from 'react';
const SupabaseAuthContext = createContext();

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);
  if (!context) {
    throw new Error('useSupabaseAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};

export const SupabaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
     // Supabase disabled - using mock authentication
    setLoading(false);
 }, []);

  const loadUserProfile = async (userId) => {
     // Mock profile loading
    const mockProfile = {
      id: userId,
      first_name: 'Demo',
      last_name: 'User',
      email: 'demo@example.com'
    };
    setProfile(mockProfile);
 };

  const signUp = async (email, password, userData = {}) => {
     // Mock sign up - Supabase disabled
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    return { 
      success: false, 
      error: 'Supabase integration disabled. Please use regular authentication.' 
    };
 };

  const signIn = async (email, password) => {
     // Mock sign in - Supabase disabled
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    return { 
      success: false, 
      error: 'Supabase integration disabled. Please use regular authentication.' 
    };
 };

  const signOut = async () => {
     // Mock sign out
    setUser(null);
    setProfile(null);
    setSession(null);
 };

  const resetPassword = async (email) => {
     // Mock password reset
    return { 
      success: false, 
      error: 'Supabase integration disabled. Please contact support for password reset.' 
    };
 };

  const updateProfile = async (updates) => {
     // Mock profile update
    if (!user) return { success: false, error: 'Nu ești autentificat' };
    
    setProfile({ ...profile, ...updates });
    return { success: true, data: { ...profile, ...updates } };
 };

  const value = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    loadUserProfile
  };

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};
