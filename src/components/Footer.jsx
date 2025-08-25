import React from 'react';
import { Package, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../translations';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://i.postimg.cc/9zLyQFZx/Chat-GPT-Image-25-aug-2025-01-47-38.png" 
                alt="FBA Prep Logistics Logo" 
                className="w-20 h-20 object-contain"
              />
              <span className="text-xl font-bold text-text-primary">FBA Prep Logistics</span>
            </div>
            <p className="text-text-secondary mb-4">
              Professional Amazon FBA prep center with 24h turnaround. Reception, quality control, FNSKU labeling, polybagging and fast shipping to European Amazon fulfillment centers. Serving EU sellers since 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/33675116218"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-dark transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://us04web.zoom.us/j/7184050116?pwd=zaaAe2ANnKbXNTGp7f8DebRbtY4LKD.1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Book Zoom
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">{t('contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-text-secondary" />
                <span className="text-text-secondary">contact@prep-center.eu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-text-secondary" />
                <span className="text-text-secondary">+33 6 75 11 62 18</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-text-secondary mt-1" />
                <span className="text-text-secondary">
                  35350 La Gouesnière, France
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">{t('quickLinks')}</h3>
            <div className="space-y-2">
              <a href="/services-pricing" className="block text-text-secondary hover:text-primary transition-colors">
                {t('services')}
              </a>
              <a href="#" className="block text-text-secondary hover:text-primary transition-colors">
                {t('pricingPDF')}
              </a>
              <a href="#" className="block text-text-secondary hover:text-primary transition-colors">
                {t('termsOfService')}
              </a>
              <a href="#" className="block text-text-secondary hover:text-primary transition-colors">
                {t('privacyPolicy')}
              </a>
              <a href="https://linkedin.com/company/global-fulfill-hub" target="_blank" rel="noopener noreferrer" className="block text-text-secondary hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://www.tiktok.com/@globalfulfillhub" target="_blank" rel="noopener noreferrer" className="block text-text-secondary hover:text-primary transition-colors">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-100 border-t py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-text-light">
            AI vibe coded development by{' '}
            <a 
              href="https://biela.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              Biela.dev
            </a>
            , powered by{' '}
            <a 
              href="https://teachmecode.ae/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              TeachMeCode® Institute
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
