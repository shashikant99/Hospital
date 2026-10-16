import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, MessageSquare, X, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { CLINIC_CONTACT, getWhatsAppUrl } from '@/lib/whatsapp.js';

const WhatsAppFloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const defaultChatUrl = getWhatsAppUrl(
    "Hello Dr. Manish Sharma, I visited your clinic website and would like to consult with you."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Action Popup Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-card rounded-2xl shadow-2xl border border-border p-4 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground leading-tight">
                  Dr. Manish Sharma
                </h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[11px] text-muted-foreground">Available on WhatsApp</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-muted-foreground">
            Have questions about homeopathic treatments or need to schedule an appointment? Choose an option:
          </div>

          <div className="space-y-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary text-xs font-semibold transition-colors"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Form</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href={defaultChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-md shadow-[#25D366]/20 transition-all"
            >
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-3 pt-2 border-t border-border/50 text-[10px] text-center text-muted-foreground">
            Clinic: +91 9024547154 • Surajgarh
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="WhatsApp Contact and Appointment Booking"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-700"></span>
        </span>

        {isOpen ? (
          <X className="w-6 h-6 transition-transform rotate-0 group-hover:rotate-90 duration-200" />
        ) : (
          <WhatsAppIcon className="w-7 h-7" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
