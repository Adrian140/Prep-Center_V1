// API client with Supabase integration disabled
export const apiClient = {
  contact: {
    send: async (formData) => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, message: "Mesajul a fost trimis cu succes!" };
      } catch (error) {
        throw new Error("Eroare la trimiterea mesajului");
      }
    }
  },
  
  // Mock authentication endpoints
  auth: {
    login: async (email, password) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Mock successful login for demo purposes
      if (email === 'demo@example.com' && password === 'demo123') {
        return { 
          token: 'mock-jwt-token', 
          user: { id: 1, email, firstName: 'Demo', lastName: 'User', role: 'user' } 
        };
      }
      throw new Error('Invalid credentials - Supabase integration disabled');
    },
    
    register: async (userData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Registration disabled - Supabase integration disabled');
    },
    
    validate: async () => {
      throw new Error('Token validation disabled - Supabase integration disabled');
    },
    
    forgotPassword: async (email) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Password reset disabled - Supabase integration disabled');
    },
    
    changePassword: async (currentPassword, newPassword) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Password change disabled - Supabase integration disabled');
    },
    
    enable2FA: async () => {
      throw new Error('2FA disabled - Supabase integration disabled');
    },
    
    verify2FA: async (token) => {
      throw new Error('2FA disabled - Supabase integration disabled');
    },
    
    disable2FA: async (token) => {
      throw new Error('2FA disabled - Supabase integration disabled');
    }
  },
  
  // Mock user endpoints
  user: {
    updateProfile: async (formData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Profile update disabled - Supabase integration disabled');
    }
  },
  
  // Mock addresses endpoints
  addresses: {
    getAll: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    },
    create: async (addressData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Address creation disabled - Supabase integration disabled');
    },
    update: async (id, addressData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Address update disabled - Supabase integration disabled');
    },
    delete: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Address deletion disabled - Supabase integration disabled');
    }
  },
  
  // Mock billing profiles endpoints
  billingProfiles: {
    getAll: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    },
    create: async (profileData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Billing profile creation disabled - Supabase integration disabled');
    },
    update: async (id, profileData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Billing profile update disabled - Supabase integration disabled');
    },
    delete: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Billing profile deletion disabled - Supabase integration disabled');
    },
    validateVAT: async (vatNumber, country) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { valid: false, error: 'VAT validation disabled - Supabase integration disabled' };
    }
  },
  
  // Mock invoices endpoints
  invoices: {
    getAll: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    },
    download: async (invoiceId) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Invoice download disabled - Supabase integration disabled');
    },
    view: async (invoiceId) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Invoice view disabled - Supabase integration disabled');
    }
  },
  
  // Mock admin endpoints
  admin: {
    getServices: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    },
    createService: async (serviceData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Service creation disabled - Supabase integration disabled');
    },
    updateService: async (id, serviceData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Service update disabled - Supabase integration disabled');
    },
    deleteService: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Service deletion disabled - Supabase integration disabled');
    },
    getPricing: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    },
    createPricing: async (pricingData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Pricing creation disabled - Supabase integration disabled');
    },
    updatePricing: async (id, pricingData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Pricing update disabled - Supabase integration disabled');
    },
    deletePricing: async (id) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Pricing deletion disabled - Supabase integration disabled');
    },
    getContent: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {};
    },
    updateContent: async (contentData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Content update disabled - Supabase integration disabled');
    },
    getPricingContent: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {};
    },
    updatePricingContent: async (contentData) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error('Pricing content update disabled - Supabase integration disabled');
    },
    getUsers: async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      return [];
    }
  }
};
