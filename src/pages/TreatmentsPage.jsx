import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Droplet, Shield, Zap, Heart, Activity, Brain, Users, Lock, Timer } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TreatmentCard from '@/components/TreatmentCard.jsx';

const TreatmentsPage = () => {
  const treatments = [
    {
      icon: Sparkles,
      title: 'Hair Fall Treatment',
      description: 'Restore hair health and prevent hair loss with natural homeopathic remedies that address the underlying causes of hair fall and promote healthy regrowth.'
    },
    {
      icon: Droplet,
      title: 'Skin Conditions',
      description: 'Comprehensive treatment for various skin issues including acne, allergies, and dermatitis using gentle, effective homeopathic medicines.'
    },
    {
      icon: Shield,
      title: 'Psoriasis Care',
      description: 'Manage and reduce psoriasis symptoms with personalized homeopathic treatment plans that focus on long-term relief and skin health.'
    },
    {
      icon: Zap,
      title: 'Eczema Treatment',
      description: 'Soothe irritated skin and reduce eczema flare-ups through natural remedies that strengthen your skin\'s natural barrier.'
    },
    {
      icon: Heart,
      title: 'Vitiligo Management',
      description: 'Holistic approach to vitiligo treatment focusing on repigmentation and overall skin health through constitutional homeopathy.'
    },
    {
      icon: Activity,
      title: 'PCOS Treatment',
      description: 'Balance hormones naturally and manage PCOS symptoms including irregular periods, weight gain, and fertility concerns.'
    },
    {
      icon: Brain,
      title: 'Thyroid Disorders',
      description: 'Regulate thyroid function and manage both hyperthyroidism and hypothyroidism with safe, effective homeopathic remedies.'
    },
    {
      icon: Zap,
      title: 'Migraine Relief',
      description: 'Reduce frequency and intensity of migraines through personalized treatment that addresses triggers and underlying causes.'
    },
    {
      icon: Users,
      title: 'Sexual Health',
      description: 'Confidential treatment for various sexual health concerns with a holistic approach to restore vitality and confidence.'
    },
    {
      icon: Lock,
      title: 'Erectile Dysfunction',
      description: 'Natural solutions for ED that address both physical and psychological factors, helping restore normal function safely.'
    },
    {
      icon: Timer,
      title: 'Premature Ejaculation',
      description: 'Effective homeopathic treatment to improve control and performance, addressing the root causes for lasting results.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Homeopathic Treatments - Pandit Ganesh Narayan Clinic</title>
        <meta name="description" content="Specialized homeopathic treatments for hair fall, skin conditions, PCOS, thyroid, migraine, and sexual health. Expert care by Dr. Manish Sharma in Surajgarh." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(https://horizons-cdn.hostinger.com/c7441319-2996-4411-8add-37c7ea94b73a/7b4941d6db0a8635903424294c27abfa.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/85"></div>
          </div>

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
                Our specialized treatments
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer comprehensive homeopathic solutions for a wide range of health conditions. 
                Each treatment is personalized to address your unique needs and health goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {treatments.map((treatment, index) => (
                <TreatmentCard
                  key={index}
                  title={treatment.title}
                  description={treatment.description}
                  icon={treatment.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                  The homeopathic advantage
                </h2>
                <p className="text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                  Homeopathy offers a gentle yet powerful approach to healing that works with your body's natural processes.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: 'Individualized care',
                    description: 'Every patient receives a unique treatment plan based on their specific symptoms, constitution, and health history.'
                  },
                  {
                    title: 'Root cause treatment',
                    description: 'We don\'t just suppress symptoms - we address the underlying imbalances causing your health issues.'
                  },
                  {
                    title: 'Safe for everyone',
                    description: 'Homeopathic remedies are safe for all ages, from infants to elderly, with no harmful side effects.'
                  },
                  {
                    title: 'Long-term results',
                    description: 'By strengthening your body\'s healing capacity, homeopathy provides lasting relief rather than temporary fixes.'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold mb-3" style={{ letterSpacing: '-0.01em' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TreatmentsPage;