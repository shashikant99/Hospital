import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
                Surajgarh, Rajasthan
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Phone</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
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
              <p className="text-muted-foreground leading-relaxed">
                Monday - Saturday: 9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Dr. Manish Sharma is available for consultations during clinic hours. 
          Walk-ins are welcome, but appointments are recommended to avoid waiting time.
        </p>
      </div>
    </div>
  );
};

export default ClinicInfo;