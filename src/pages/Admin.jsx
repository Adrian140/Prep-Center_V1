import React, { useState, useEffect } from 'react';
import { Settings, DollarSign, FileText, Save, Edit, Shield, LogOut } from 'lucide-react';

function Admin() {
  const [activeTab, setActiveTab] = useState('content');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Content management state
  const [content, setContent] = useState({
    // Hero Section
    heroTitle: "Prep Center France – 24h Turnaround to Amazon FBA",
    heroSubtitle: "Reception, quality control, FNSKU labeling, polybagging & fast shipping to EU Amazon FCs.",
    
    // Navigation
    homeNav: "Accueil",
    servicesNav: "Services et Tarifs", 
    aboutNav: "À Propos",
    contactNav: "Contact",
    
    // Buttons
    getQuoteBtn: "Obtenir un Devis",
    whatsappBtn: "Chat WhatsApp",
    bookZoomBtn: "Réserver Zoom",
    
    // Contact Info
    phone: "+33 6 75 11 62 18",
    email: "contact@prep-center.eu",
    address: "35350 La Gouesnière, France",
    whatsappLink: "https://wa.me/33675116218",
    zoomLink: "https://us04web.zoom.us/j/7184050116?pwd=zaaAe2ANnKbXNTGp7f8DebRbtY4LKD.1",
    
    // Pricing
    standardRate: "€0.50",
    newCustomerRate: "€0.45",
    starterPrice: "€1.20",
    growthPrice: "€1.10", 
    enterprisePrice: "€0.95",
    palletStoragePrice: "€15",
    climateControlledPrice: "+€5"
  });

  const tabs = [
    { id: 'content', label: 'Conținut Site', icon: FileText },
    { id: 'pricing', label: 'Prețuri', icon: DollarSign },
    { id: 'settings', label: 'Setări', icon: Settings }
  ];

  // Load content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('adminContent');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (error) {
        console.error('Error loading saved content:', error);
      }
    }
  }, []);

  const handleSaveAll = () => {
    setLoading(true);
    
    // Save to localStorage (in production, this would save to database)
    localStorage.setItem('adminContent', JSON.stringify(content));
    
    // Simulate API call delay
    setTimeout(() => {
      setMessage('Toate modificările au fost salvate cu succes!');
      setLoading(false);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const handleContentChange = (field, value) => {
    setContent({
      ...content,
      [field]: value
    });
  };

  const renderContentTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Editare Conținut Site</h2>

      {/* Hero Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Hero</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Titlu Principal
            </label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => handleContentChange('heroTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Subtitlu
            </label>
            <textarea
              value={content.heroSubtitle}
              onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Navigație</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Accueil"
            </label>
            <input
              type="text"
              value={content.homeNav}
              onChange={(e) => handleContentChange('homeNav', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Services et Tarifs"
            </label>
            <input
              type="text"
              value={content.servicesNav}
              onChange={(e) => handleContentChange('servicesNav', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "À Propos"
            </label>
            <input
              type="text"
              value={content.aboutNav}
              onChange={(e) => handleContentChange('aboutNav', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Contact"
            </label>
            <input
              type="text"
              value={content.contactNav}
              onChange={(e) => handleContentChange('contactNav', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Butoane de Acțiune</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Obtenir un Devis"
            </label>
            <input
              type="text"
              value={content.getQuoteBtn}
              onChange={(e) => handleContentChange('getQuoteBtn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Chat WhatsApp"
            </label>
            <input
              type="text"
              value={content.whatsappBtn}
              onChange={(e) => handleContentChange('whatsappBtn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Buton "Réserver Zoom"
            </label>
            <input
              type="text"
              value={content.bookZoomBtn}
              onChange={(e) => handleContentChange('bookZoomBtn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Telefon
            </label>
            <input
              type="text"
              value={content.phone}
              onChange={(e) => handleContentChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              value={content.email}
              onChange={(e) => handleContentChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Adresă
            </label>
            <textarea
              value={content.address}
              onChange={(e) => handleContentChange('address', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link WhatsApp
            </label>
            <input
              type="url"
              value={content.whatsappLink}
              onChange={(e) => handleContentChange('whatsappLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link Zoom Meeting
            </label>
            <input
              type="url"
              value={content.zoomLink}
              onChange={(e) => handleContentChange('zoomLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPricingTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Editare Prețuri</h2>
      
      {/* FBA Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Preț Standard FNSKU
            </label>
            <input
              type="text"
              value={content.standardRate}
              onChange={(e) => handleContentChange('standardRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Preț Clienți Noi
            </label>
            <input
              type="text"
              value={content.newCustomerRate}
              onChange={(e) => handleContentChange('newCustomerRate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* FBM Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBM</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Starter (0-999 units/month)
            </label>
            <input
              type="text"
              value={content.starterPrice}
              onChange={(e) => handleContentChange('starterPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Growth (1000-1999 units/month)
            </label>
            <input
              type="text"
              value={content.growthPrice}
              onChange={(e) => handleContentChange('growthPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Enterprise (2000+ units/month)
            </label>
            <input
              type="text"
              value={content.enterprisePrice}
              onChange={(e) => handleContentChange('enterprisePrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Storage Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri Storage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Pallet Storage (per month)
            </label>
            <input
              type="text"
              value={content.palletStoragePrice}
              onChange={(e) => handleContentChange('palletStoragePrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Climate Controlled (extra)
            </label>
            <input
              type="text"
              value={content.climateControlledPrice}
              onChange={(e) => handleContentChange('climateControlledPrice', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Setări Generale</h2>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Telefon
            </label>
            <input
              type="text"
              value={content.phone}
              onChange={(e) => handleContentChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              value={content.email}
              onChange={(e) => handleContentChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Adresă
            </label>
            <textarea
              value={content.address}
              onChange={(e) => handleContentChange('address', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link WhatsApp
            </label>
            <input
              type="url"
              value={content.whatsappLink}
              onChange={(e) => handleContentChange('whatsappLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link Zoom Meeting
            </label>
            <input
              type="url"
              value={content.zoomLink}
              onChange={(e) => handleContentChange('zoomLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">Informații Sistem</h3>
        <div className="space-y-2 text-sm">
          <p className="text-blue-800">
            <strong>Versiune:</strong> 1.0.0
          </p>
          <p className="text-blue-800">
            <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
          </p>
          <p className="text-blue-800">
            <strong>Framework:</strong> React + Vite + Tailwind CSS
          </p>
          <p className="text-blue-800">
            <strong>Hosting:</strong> Vercel
          </p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return renderContentTab();
      case 'pricing':
        return renderPricingTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return renderContentTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center mb-2">
                <Shield className="w-8 h-8 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-text-primary">Panou de Administrare</h1>
              </div>
              <p className="text-text-secondary">Gestionează conținutul și prețurile site-ului</p>
              <div className="mt-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                ✓ Autentificat ca Administrator
              </div>
            </div>
            <a
              href="/"
              className="flex items-center px-4 py-2 text-text-secondary hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Înapoi la Site
            </a>
          </div>
        </div>

        {message && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-600">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleSaveAll}
                  disabled={loading}
                  className="w-full bg-primary text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  <Save className="w-5 h-5 mr-2" />
                  {loading ? 'Se salvează...' : 'Salvează Tot'}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
