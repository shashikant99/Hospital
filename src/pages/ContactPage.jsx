import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import ClinicInfo from '@/components/ClinicInfo.jsx';
import clinicEntrance from '@/assets/clinic-entrance.jpg';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Pandit Ganesh Narayan Homeopathic Clinic</title>
        <meta name="description" content="Get in touch with Pandit Ganesh Narayan Homeopathic Clinic in Surajgarh. Book your consultation with Dr. Manish Sharma today." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="section-spacing bg-gradient-to-b from-secondary/30 to-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Get in touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions or ready to book a consultation? We're here to help you on your journey to better health.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <h2 className="text-2xl font-semibold mb-6 text-card-foreground" style={{ letterSpacing: '-0.01em' }}>
                    Send us a message
                  </h2>
                  <ContactForm />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                  <ClinicInfo />
                </div>

                <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ letterSpacing: '-0.01em' }}>
                        Call us directly
                      </h3>
                      <p className="text-primary-foreground/90 mb-4 leading-relaxed">
                        Speak with Dr. Manish Sharma or our clinic staff to discuss your health concerns and schedule an appointment.
                      </p>
                      <a
                        href="tel:+919024547154"
                        className="inline-flex items-center gap-2 text-xl font-bold hover:opacity-90 transition-opacity duration-200"
                      >
                        <Phone className="w-5 h-5" />
                        +91 9024547154
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Visit our clinic
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Surajgarh, our clinic provides a welcoming and comfortable environment for your consultation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50">
                <div className="h-[300px] md:h-auto relative">
                  <img
                    src={clinicEntrance}
                    alt="Pandit Ganesh Narayan Homeopathic Clinic Entrance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                    <span className="text-white font-semibold text-lg">Our Clinic Entrance & Signage</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Visit Our Clinic
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We are located at Kirna Villas in Surajgarh. You will find our signature circular orange and green PGN sign right outside the entrance on the brick facade.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground">Address:</p>
                    <p>Kirna Villas, P.No. 4, Ward No. 16,</p>
                    <p>Surajgarh, Rajasthan - 333029</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;