import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Heart, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import clinicEntrance from '@/assets/clinic-entrance.jpg';

const AboutPage = () => {
  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '3,200+', label: 'Patients Treated' },
    { number: '11', label: 'Specializations' },
    { number: '94%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Patient-centered care',
      description: 'We put your health and wellbeing at the center of everything we do, ensuring personalized attention and compassionate treatment.'
    },
    {
      icon: Award,
      title: 'Clinical excellence',
      description: 'Committed to the highest standards of homeopathic practice, combining traditional wisdom with modern understanding.'
    },
    {
      icon: Users,
      title: 'Holistic approach',
      description: 'We treat the whole person - mind, body, and spirit - not just isolated symptoms or conditions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Pandit Ganesh Narayan Homeopathic Clinic</title>
        <meta name="description" content="Learn about Dr. Manish Sharma and Pandit Ganesh Narayan Homeopathic Clinic in Surajgarh. Over 12 years of experience in natural homeopathic healing." />
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
                About our clinic
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dedicated to providing natural, effective homeopathic care to the Surajgarh community and beyond.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={clinicEntrance}
                    alt="Pandit Ganesh Narayan Homeopathic Clinic entrance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Our story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Pandit Ganesh Narayan Homeopathic Clinic was established with a vision to bring the healing power of homeopathy to the people of Surajgarh and surrounding areas. For over a decade, we have been committed to providing safe, natural, and effective healthcare solutions.
                  </p>
                  <p>
                    Our clinic is built on the foundation of classical homeopathic principles, where each patient is treated as a unique individual. We believe in addressing the root cause of illness rather than merely suppressing symptoms, leading to deeper and more lasting healing.
                  </p>
                  <p>
                    Today, we are proud to serve thousands of patients who have experienced the transformative power of homeopathic medicine in their journey toward optimal health and wellbeing.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-border/50 pt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Meet Dr. Manish Sharma
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
                  <p>
                    Dr. Manish Sharma is a highly qualified and experienced homeopathic physician with over 12 years of clinical practice. He holds a degree in Homeopathic Medicine and Surgery (BHMS) and has completed advanced training in classical homeopathy.
                  </p>
                  <p>
                    Dr. Sharma specializes in treating chronic and complex conditions including skin disorders, hormonal imbalances, autoimmune conditions, and lifestyle-related health issues. His approach combines deep knowledge of homeopathic materia medica with a compassionate understanding of each patient's unique needs.
                  </p>
                  <p>
                    Known for his patient-centered approach and attention to detail, Dr. Sharma takes the time to understand not just your symptoms, but your overall health picture, lifestyle, and emotional wellbeing to prescribe the most appropriate remedy.
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
                    'Advanced Diploma in Classical Homeopathy',
                    'Member, National Homeopathic Medical Association',
                    'Specialized training in chronic disease management'
                  ].map((credential, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{credential}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3"
                    alt="Dr. Manish Sharma - Homeopathic physician at Pandit Ganesh Narayan Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-spacing bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Our core values
              </h2>
              <p className="text-lg text-secondary-foreground/80 leading-relaxed">
                These principles guide everything we do at Pandit Ganesh Narayan Homeopathic Clinic.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ letterSpacing: '-0.01em' }}>
                    {value.title}
                  </h3>
                  <p className="text-secondary-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;