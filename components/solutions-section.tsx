"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Package, Leaf, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
  {
    title: "Logistics & Warehousing",
    description: [
      "Reduce last-mile delivery costs by up to 70%",
      "Automate inventory tracking and management",
      "Enable 24/7 operations with autonomous systems",
      "Decrease delivery times by 60%",
    ],
    metrics: [
      { label: "Delivery Cost", before: "$12.50", after: "$3.75", improvement: "+70%" },
      { label: "Delivery Time", before: "24 hours", after: "2 hours", improvement: "+92%" },
      { label: "Operating Costs", before: "$100k", after: "$55k", improvement: "+45%" },
    ],
    icon: Package,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
  {
    title: "Agriculture & Farming",
    description: [
      "Increase crop yields by up to 40%",
      "Reduce water usage by 30%",
      "Optimize fertilizer application",
      "Early detection of crop diseases",
    ],
    metrics: [
      { label: "Crop Yield", before: "8.5 tons", after: "11.9 tons", improvement: "+40%" },
      { label: "Water Usage", before: "100L/m²", after: "70L/m²", improvement: "+30%" },
      { label: "Operating Costs", before: "$85k", after: "$59.5k", improvement: "+30%" },
    ],
    icon: Leaf,
    color: "bg-green-500/10 text-green-500 border-green-500/20",
  },
  {
    title: "Construction & Infrastructure",
    description: [
      "Reduce survey time by 80%",
      "Real-time project progress tracking",
      "Improve safety monitoring",
      "Enhance project documentation",
    ],
    metrics: [
      { label: "Survey Time", before: "5 days", after: "1 day", improvement: "+80%" },
      { label: "Progress Tracking", before: "75%", after: "98%", improvement: "+30%" },
      { label: "Safety Incidents", before: "20/year", after: "11/year", improvement: "+45%" },
    ],
    icon: Building,
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  },
];

export function SolutionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="solutions"
      className="py-24 solutions-section"
      ref={ref}
    >
      <div className="container">
        <motion.div
          className="flex flex-col justify-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-muted-foreground max-w-xl mb-8">
            Our drone solutions are designed to transform industries with
            cutting-edge technology and measurable results.
          </p>

          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                solution={solution}
                inView={inView}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SolutionCardProps {
  solution: {
    title: string;
    description: string[];
    metrics: { label: string; before: string; after: string; improvement: string }[];
    icon: React.ElementType;
    color: string;
  };
  inView: boolean;
  index: number;
}

function SolutionCard({ solution, inView, index }: SolutionCardProps) {
  const Icon = solution.icon;
  const delay = 0.2 + index * 0.1;

  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center",
            solution.color.split(" ").slice(0, 2).join(" ")
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-2xl font-bold">{solution.title}</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ul className="space-y-2">
          {solution.description.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className={cn("h-1.5 w-1.5 rounded-full mt-2", solution.color.split(" ")[1])} />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {solution.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-card/30 backdrop-blur-sm border rounded-lg p-4",
                solution.color.split(" ")[2]
              )}
            >
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">Before:</span>
                  <span className="text-sm">{metric.before}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-muted-foreground">After:</span>
                  <span className="text-sm font-medium">{metric.after}</span>
                </div>
                <div className={cn("text-center py-1 rounded text-sm font-medium", solution.color.split(" ")[1])}>
                  {metric.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}