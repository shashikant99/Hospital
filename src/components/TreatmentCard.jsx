import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const TreatmentCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary">
            <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-foreground" style={{ letterSpacing: '-0.01em' }}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed flex-grow">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TreatmentCard;