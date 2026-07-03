import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Leaf, Heart, Shield } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import homeWebp from '@/assets/home.webp';

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

        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-24">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${homeWebp})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center 40%',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 hero-overlay"></div>
          </div>

          <div className="container-custom relative z-10 py-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: 'spring',
                    stiffness: 60,
                    delay: 0.1,
                    staggerChildren: 0.12
                  }
                }
              }}
              className="max-w-3xl bg-black/45 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Soft decorative light blobs inside the card */}
              <div className="absolute -top-16 -left-16 w-36 h-36 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Trusted Homeopathic Care
              </motion.div>

              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" 
                style={{ letterSpacing: '-0.02em' }}
              >
                Pandit Ganesh Narayan <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-amber-300 font-extrabold">
                  Homeopathic Clinic
                </span>
              </motion.h1>
              
              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
              >
                Experience natural, gentle, and effective healing through classical homeopathy, tailored to your body's unique health ecosystem.
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-600/90 text-white font-medium border-0 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20">
                  <Link to="/contact">
                    Book Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white backdrop-blur transition-all duration-200 active:scale-[0.98]">
                  <Link to="/treatments">
                    View Treatments
                  </Link>
                </Button>
              </motion.div>
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
                  whileHover="hover"
                  variants={{
                    hover: { y: -8, scale: 1.02 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 cursor-pointer"
                >
                  <motion.div 
                    variants={{
                      hover: { rotate: 10, scale: 1.1 }
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                  >
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </motion.div>
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