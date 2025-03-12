"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Package, Navigation, Lock, Thermometer } from "lucide-react";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Advanced Payload Systems",
    items: [
      { label: "Maximum Capacity", value: "5kg" },
      { label: "Loading Time", value: "45 seconds" },
      { label: "Temperature Range", value: "-20 to +50°C" },
      { label: "Load Sensors", value: "8 points" },
    ],
    icon: Package,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    title: "Intelligent Navigation",
    items: [
      { label: "Position Accuracy", value: "0.1m" },
      { label: "LiDAR Range", value: "100m" },
      { label: "Vision Range", value: "50m" },
      { label: "Update Rate", value: "100Hz" },
    ],
    icon: Navigation,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  },
  {
    title: "Advanced Security",
    items: [
      { label: "Encryption Level", value: "256bit" },
      { label: "Key Exchange", value: "4096bit" },
      { label: "Auth Latency", value: "<10ms" },
      { label: "Security Zones", value: "4 layers" },
    ],
    icon: Lock,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
  },
];

export function CapabilitiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="capabilities"
      className="py-24 capabilities-section"
      ref={ref}
    >
      <div className="container">
        <div className="section-with-drone">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-muted-foreground max-w-xl mb-8">
              Our drones are equipped with state-of-the-art systems for maximum
              efficiency, security, and reliability.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={index}
                  capability={capability}
                  inView={inView}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
}

interface CapabilityCardProps {
  capability: {
    title: string;
    items: { label: string; value: string }[];
    icon: React.ElementType;
    color: string;
  };
  inView: boolean;
  delay: number;
}

function CapabilityCard({ capability, inView, delay }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <motion.div
      className={cn(
        "bg-card/30 backdrop-blur-sm border rounded-xl p-6",
        capability.color.split(" ")[2]
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            capability.color.split(" ").slice(0, 2).join(" ")
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{capability.title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {capability.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}