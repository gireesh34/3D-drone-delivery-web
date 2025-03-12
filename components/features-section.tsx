"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Zap, Cloud, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Payload Capacity",
    value: "5 KG",
    icon: Gauge,
    color: "text-blue-500 border-blue-500/20",
  },
  {
    title: "Flight Time",
    value: "120 MIN",
    icon: Zap,
    color: " text-purple-500 border-purple-500/20",
  },
  {
    title: "Maximum Range",
    value: "150 KM",
    icon: Cloud,
    color: " text-green-500 border-green-500/20",
  },
  {
    title: "Maximum Speed",
    value: "120 KM/H",
    icon: Shield,
    color: " text-orange-500 border-orange-500/20",
  },
];

const safetyFeatures = [
  "360° LiDAR Obstacle Detection",
  "Triple Redundancy Systems",
  "Smart Parachute Recovery",
];

const certifications = [
  "BVLOS Certified",
  "Type C3 Safety Rating",
  "IP56 Weather Rating",
];

const advancedSystems = [
  "AI-Powered Navigation",
  "Secure Communication",
  "Cloud Integration",
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="features"
      className="py-24 features-section"
      ref={ref}
    >
      <div className="container">
        <div className="section-with-drone">
          {/* Empty space for drone model on the left */}
          <div className="drone-space hidden md:block"></div>
          
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8">
              Our drones are built with cutting-edge technology to deliver
              exceptional performance in any environment.
            </p>
            
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={cn(
                    "bg-card/30 backdrop-blur-sm border rounded-xl p-6 text-center",
                    feature.color.split(" ")[0],
                    feature.color.split(" ")[1],
                    feature.color.split(" ")[2]
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4",
                      feature.color
                    )}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-medium mb-2">{feature.title}</h3>
                  <p className="text-2xl font-bold text-muted-foreground">{feature.value}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureList
                title="Safety Features"
                items={safetyFeatures}
                icon={Shield}
                color="text-blue-500"
                inView={inView}
                delay={0.3}
              />
              <FeatureList
                title="License"
                items={certifications}
                icon={Zap}
                color="text-purple-500"
                inView={inView}
                delay={0.5}
              />
              <FeatureList
                title="Advanced Systems"
                items={advancedSystems}
                icon={Cloud}
                color="text-green-500"
                inView={inView}
                delay={0.7}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FeatureListProps {
  title: string;
  items: string[];
  icon: React.ElementType;
  color: string;
  inView: boolean;
  delay: number;
}

function FeatureList({
  title,
  items,
  icon: Icon,
  color,
  inView,
  delay,
}: FeatureListProps) {
  return (
    <motion.div
      className={`bg-card/30 backdrop-blur-sm border rounded-xl p-6 ${color.replace('Icon-', 'border-')}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`h-6 w-6 ${color}`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className={`h-1.5 w-1.5 rounded-full ${color}`} />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}