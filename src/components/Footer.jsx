import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { CLINIC_CONTACT, getWhatsAppUrl } from '@/lib/whatsapp.js';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10 flex-shrink-0" />
              <div>
                <span className="text-base font-semibold block leading-tight" style={{ letterSpacing: '-0.01em' }}>
                  PGN Clinic
                </span>
                <p className="text-xs text-secondary-foreground/70">Homeopathic Care</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-[280px]">
              Providing natural and holistic homeopathic treatments for over a decade in Surajgarh.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-primary/10 border border-primary/20 text-xs font-semibold text-foreground max-w-[280px]">
              <span className="text-primary mr-1">💧</span>
              <span>"{CLINIC_CONTACT.tagline}"</span>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block tracking-wide">Quick Links</span>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Home
              </Link>
              <Link to="/treatments" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Treatments
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block tracking-wide">Contact Info</span>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                  In front of Ganesh Mandir, Ward No. 20, House No. 4, Surajgarh, Distt. Jhunjhunu (Raj.) 333029
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${CLINIC_CONTACT.phoneDisplay}`} className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                  {CLINIC_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a 
                  href={getWhatsAppUrl("Hello Dr. Manish Sharma, I would like to inquire about homeopathic treatment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-[#25D366] transition-colors duration-200 font-medium"
                >
                  WhatsApp: +91 9024547154
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-sm text-secondary-foreground/80">clinic@ganeshnarayan.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/p/Pandit-ganesh-naryan-homeopathic-clinnic-surajgarh-100075950684653/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Facebook Page
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/p.g.naryanhomeopathic?igsh=d3lxbTVuaHZwbzdm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                >
                  Instagram Profile
                </a>
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold mb-4 block tracking-wide">Clinic Hours</span>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <p className="font-semibold text-foreground">Monday - Saturday</p>
              <div className="space-y-1">
                <p>Morning: <span className="font-medium text-foreground">9:00 AM - 1:30 PM</span></p>
                <p>Evening: <span className="font-medium text-foreground">4:30 PM - 8:00 PM</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              © 2026 Pandit Ganesh Narayan Homeopathic Clinic. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs text-secondary-foreground/60 mt-4 text-center sm:text-left">
            Dr. Manish Sharma — Licensed Homeopathic Practitioner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;