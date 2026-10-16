import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { ExternalLink, RotateCcw } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { CLINIC_CONTACT, formatAppointmentWhatsAppMessage, getWhatsAppUrl, sendCallMeBotNotification } from '@/lib/whatsapp.js';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [submittedResult, setSubmittedResult] = useState(null);

  // Today's date for date picker min attribute
  const todayDateString = new Date().toISOString().split('T')[0];

  const validateForm = () => {
    const newErrors = {};
    
    // Full Name / Patient Name
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    // Phone Number (10 digits)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Email Address (Optional, validated if provided)
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Location / City
    if (!formData.location.trim()) {
      newErrors.location = 'Location / City is required';
    }

    // Date of Appointment
    if (!formData.date) {
      newErrors.date = 'Date of appointment is required';
    } else if (formData.date < todayDateString) {
      newErrors.date = 'Appointment date cannot be in the past';
    }
    
    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all the required details.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Format WhatsApp message
      const messageText = formatAppointmentWhatsAppMessage({
        formType: 'appointment',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        date: formData.date,
        timeSlot: '',
        message: formData.message
      });

      // 2. Generate WhatsApp link (https://wa.me/919024547154?text=...)
      const whatsappUrl = getWhatsAppUrl(messageText);

      // 3. Save submission to localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        id: Date.now(),
        ...formData,
        whatsappMessage: messageText,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

      // 4. Send background notification (if configured)
      sendCallMeBotNotification(messageText).catch(() => {});

      // 5. Open WhatsApp directly to the owner (+91 9024547154)
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = whatsappUrl;
      } else {
        const newWin = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
          window.location.href = whatsappUrl;
        }
      }

      toast.success('Opening WhatsApp to send your details to the owner...');

      setSubmittedResult({
        data: { ...formData },
        whatsappUrl
      });
    } catch (err) {
      console.error('Submission error:', err);
      toast.error('Could not redirect to WhatsApp automatically. Please click the button below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      location: '',
      date: '',
      message: ''
    });
    setErrors({});
  };

  // If submitted, show confirmation with direct WhatsApp send button
  if (submittedResult) {
    return (
      <div className="bg-card rounded-2xl border border-primary/20 p-6 md:p-8 space-y-6 animate-in fade-in-50 duration-300">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0 text-[#25D366]">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">
              Details Ready for WhatsApp!
            </h3>
            <p className="text-sm text-muted-foreground">
              Direct message to Owner Dr. Manish Sharma (+91 9024547154)
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-xl p-4 border border-border/60 space-y-2.5 text-sm">
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Patient Name:</span>
            <span className="font-semibold text-foreground">{submittedResult.data.name}</span>
          </div>
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Phone Number:</span>
            <span className="font-medium text-foreground">{submittedResult.data.phone}</span>
          </div>
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Location:</span>
            <span className="font-medium text-foreground">{submittedResult.data.location}</span>
          </div>
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <span className="text-muted-foreground">Date of Appointment:</span>
            <span className="font-medium text-foreground">{submittedResult.data.date}</span>
          </div>
          {submittedResult.data.email && (
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-muted-foreground">Email:</span>
              <span className="font-medium text-foreground">{submittedResult.data.email}</span>
            </div>
          )}
          <div className="pt-1">
            <span className="text-muted-foreground block mb-1">Message:</span>
            <p className="text-foreground bg-background p-2.5 rounded-lg border border-border/40 text-xs">
              {submittedResult.data.message}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={submittedResult.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all duration-200 active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>Send Message on WhatsApp (+91 9024547154)</span>
            <ExternalLink className="w-4 h-4 ml-1 opacity-80" />
          </a>

          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="w-full gap-2 border-border/80 hover:bg-muted"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Send Another Message</span>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Tip: In WhatsApp, simply tap the green Send button to deliver your message.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="text-foreground placeholder:text-muted-foreground h-11"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
          Email Address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="text-foreground placeholder:text-muted-foreground h-11"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10-digit mobile number"
          className="text-foreground placeholder:text-muted-foreground h-11"
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="text-sm font-medium mb-1.5 block">
          Location
        </Label>
        <Input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter your location / city (e.g. Surajgarh)"
          className="text-foreground placeholder:text-muted-foreground h-11"
        />
        {errors.location && (
          <p className="text-sm text-destructive mt-1">{errors.location}</p>
        )}
      </div>

      {/* Date of Appointment */}
      <div>
        <Label htmlFor="date" className="text-sm font-medium mb-1.5 block">
          Date of Appointment
        </Label>
        <Input
          id="date"
          name="date"
          type="date"
          min={todayDateString}
          value={formData.date}
          onChange={handleChange}
          className="text-foreground placeholder:text-muted-foreground h-11 cursor-pointer"
        />
        {errors.date && (
          <p className="text-sm text-destructive mt-1">{errors.date}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-sm font-medium mb-1.5 block">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your health concerns..."
          rows={4}
          className="text-foreground placeholder:text-muted-foreground resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message}</p>
        )}
      </div>

      {/* Send Message Button */}
      <div className="pt-1 space-y-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 transition-all duration-200 active:scale-[0.98] font-semibold text-base"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Details will be sent directly to the owner's WhatsApp ({CLINIC_CONTACT.phoneDisplay})
        </p>
      </div>
    </form>
  );
};

export default ContactForm;