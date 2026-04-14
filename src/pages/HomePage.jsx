import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Leaf, Heart, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const HomePage = () => {
  const benefits = [
    { icon: Leaf, title: 'Natural healing', description: 'Gentle, non-invasive treatments using natural remedies' },
    { icon: Heart, title: 'Holistic approach', description: 'Treating the whole person, not just symptoms' },
    { icon: Shield, title: 'Safe & effective', description: 'No harmful side effects, suitable for all ages' }
  ];

  return (
    <>
      <Helmet>
        <title>Pandit Ganesh Narayan Homeopathic Clinic - Natural Healing in Surajgarh</title>
        <meta name="description" content="Expert homeopathic treatments in Surajgarh by Dr. Manish Sharma. Specializing in hair fall, skin conditions, PCOS, thyroid, and more. Book your consultation today." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://horizons-cdn.hostinger.com/c7441319-2996-4411-8add-37c7ea94b73a/6bfed6e1ec18a2f0f2e2f2264b24db1d.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 hero-overlay"></div>
          </div>

          <div className="container-custom relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Pandit Ganesh Narayan Homeopathic Clinic Surajgarh
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Experience natural healing through time-tested homeopathic treatments tailored to your unique health needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="text-base transition-all duration-200 active:scale-[0.98]">
                  <Link to="/treatments">
                    View Treatments
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Your trusted partner in natural healthcare
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Pandit Ganesh Narayan Homeopathic Clinic, we believe in treating the root cause of illness, not just the symptoms. 
                Under the expert guidance of Dr. Manish Sharma, we offer personalized homeopathic solutions for a wide range of health conditions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Why choose homeopathy?
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    'Treats the root cause, not just symptoms',
                    'Safe for all ages, including children and pregnant women',
                    'No harmful side effects or drug interactions',
                    'Strengthens your body\'s natural healing ability',
                    'Personalized treatment plans for lasting results'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-secondary-foreground/90 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                    alt="Doctor consultation at Pandit Ganesh Narayan Homeopathic Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Ready to start your healing journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Schedule a consultation with Dr. Manish Sharma and discover how homeopathy can help you achieve optimal health naturally.
              </p>
              <Button asChild size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                <Link to="/contact">
                  Book Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;