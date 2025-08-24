import React, { useState } from 'react';
import { Settings, DollarSign, FileText, LogOut, Save, Edit } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

function SimpleAdminPanel() {
  const { adminLogout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState('navigation');
  const [message, setMessage] = useState('');
  
  // Stare pentru tot conținutul site-ului
  const [content, setContent] = useState({
    // Contact Info
    phone: "+33 6 75 11 62 18",
    email: "contact@prep-center.eu", 
    address: "35350 La Gouesnière, France",
    whatsappLink: "https://wa.me/33675116218",
    logoUrl: "https://i.postimg.cc/30D2w6bm/logo.png",
    
    // Navigation
    homeNav: "Accueil",
    servicesNav: "Services et Tarifs",
    aboutNav: "À Propos",
    contactNav: "Contact",
    
    // Buttons
    getQuoteBtn: "Obtenir un Devis",
    whatsappBtn: "Chat WhatsApp",
    bookZoomBtn: "Réserver Zoom",
    
    // Links
    zoomLink: "https://us04web.zoom.us/j/7184050116?pwd=zaaAe2ANnKbXNTGp7f8DebRbtY4LKD.1"
  });

  const tabs = [
    { id: 'navigation', label: 'Navigație și Butoane', icon: Settings }
  ];

  const handleSaveAll = () => {
    // În implementarea reală, aici ai salva în baza de date
    localStorage.setItem('adminContent', JSON.stringify(content));
    setMessage('Toate modificările au fost salvate cu succes!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleContentChange = (field, value) => {
    setContent({
      ...content,
      [field]: value
    });
  };

  const renderNavigationTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Navigație și Butoane</h2>

      {/* Navigation & Buttons */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Editare Navigație</h3>
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
              Buton "Book Zoom"
            </label>
            <input
              type="text"
              value={content.bookZoomBtn}
              onChange={(e) => handleContentChange('bookZoomBtn', e.target.value)}
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
              URL Logo
            </label>
            <input
              type="url"
              value={content.logoUrl}
              onChange={(e) => handleContentChange('logoUrl', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
      
      <button
        onClick={handleSaveAll}
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center"
      >
        <Save className="w-5 h-5 mr-2" />
        Salvează Toate Modificările
      </button>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'navigation':
        return renderNavigationTab();
      default:
        return renderNavigationTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">Panou de Administrare</h1>
              <p className="text-text-secondary">Gestionează prețurile și conținutul site-ului</p>
            </div>
            <button
              onClick={adminLogout}
              className="flex items-center px-4 py-2 text-text-secondary hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Deconectare
            </button>
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

export default SimpleAdminPanel;
