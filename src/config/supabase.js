// Supabase integration disabled - using mock helpers
export const supabaseHelpers = {
   // Mock authentication methods
  signUp: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  signIn: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  signOut: () => Promise.resolve({ error: null }),
  resetPassword: () => Promise.resolve({ error: { message: 'Supabase integration disabled' } }),
  getProfile: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  updateProfile: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  
  // Mock data operations
  getServices: () => Promise.resolve({ data: [], error: null }),
  createService: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  updateService: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  deleteService: () => Promise.resolve({ error: { message: 'Supabase integration disabled' } }),
  
  // Mock address operations
  getAddresses: () => Promise.resolve({ data: [], error: null }),
  createAddress: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  updateAddress: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  deleteAddress: () => Promise.resolve({ error: { message: 'Supabase integration disabled' } }),
  
  // Mock billing operations
  getBillingProfiles: () => Promise.resolve({ data: [], error: null }),
  createBillingProfile: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  updateBillingProfile: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  deleteBillingProfile: () => Promise.resolve({ error: { message: 'Supabase integration disabled' } }),
  
  // Mock invoice operations
  getInvoices: () => Promise.resolve({ data: [], error: null }),
  uploadInvoice: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } }),
  downloadInvoice: () => Promise.resolve({ data: null, error: { message: 'Supabase integration disabled' } })
};

// Supabase client disabled
export const supabase = null;