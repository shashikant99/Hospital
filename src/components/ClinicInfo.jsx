import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { CLINIC_CONTACT, getWhatsAppUrl } from '@/lib/whatsapp.js';

const ClinicInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-foreground" style={{ letterSpacing: '-0.01em' }}>
          Get in touch
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Location</p>
              <p className="text-muted-foreground leading-relaxed">
                Pandit Ganesh Narayan Homeopathic Clinic<br />
                In front of Ganesh Mandir, Ward No. 20, House No. 4,<br />
                Surajgarh, Distt. Jhunjhunu (Raj.) 333029
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Phone</p>
              <a 
                href={`tel:${CLINIC_CONTACT.phoneDisplay}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {CLINIC_CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0 text-[#25D366]">
              <WhatsAppIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">WhatsApp (Direct Consultation)</p>
              <a 
                href={getWhatsAppUrl("Hello Dr. Manish Sharma, I would like to consult with you regarding homeopathic treatment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1"
              >
                Chat on WhatsApp (+91 9024547154)
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Email</p>
              <p className="text-muted-foreground">clinic@ganeshnarayan.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Clinic Hours</p>
              <div className="text-muted-foreground leading-relaxed text-sm space-y-0.5">
                <p className="font-semibold text-foreground">Monday - Saturday:</p>
                <p>Morning: <span className="font-medium text-foreground">9:00 AM to 1:30 PM</span></p>
                <p>Evening: <span className="font-medium text-foreground">4:30 PM to 8:00 PM</span></p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Facebook className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Facebook</p>
              <a 
                href="https://www.facebook.com/p/Pandit-ganesh-naryan-homeopathic-clinnic-surajgarh-100075950684653/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Follow us on Facebook
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Instagram className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Instagram</p>
              <a 
                href="https://www.instagram.com/p.g.naryanhomeopathic?igsh=d3lxbTVuaHZwbzdm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Follow us on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Tagline Box */}
      <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-emerald-500/10 to-primary/10 border border-primary/20 text-center shadow-sm">
        <span className="text-base text-primary mr-1.5">💧</span>
        <span className="font-semibold text-foreground text-sm tracking-wide">
          "{CLINIC_CONTACT.tagline}"
        </span>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Dr. Manish Sharma is available for consultations during clinic hours (9:00 AM - 1:30 PM & 4:30 PM - 8:00 PM). 
          Walk-ins are welcome, but appointments are recommended to avoid waiting time.
        </p>
      </div>
    </div>
  );
};

export default ClinicInfo;