import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo.jsx';

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
                  Kirna Villas, P.No. 4, Ward No. 16, Surajgarh, Rajasthan
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+919024547154" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200">
                  +91 9024547154
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
              <p>Monday - Saturday</p>
              <p className="font-medium">9:00 AM - 7:00 PM</p>
              <p className="mt-3">Sunday</p>
              <p className="font-medium">10:00 AM - 2:00 PM</p>
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