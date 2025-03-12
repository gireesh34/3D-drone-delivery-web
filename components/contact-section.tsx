"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      className="py-24 contact-section"
      ref={ref}
    >
      <div className="container">
        <div className="section-with-drone grid grid-cols-1 md:grid-cols-2 items-start gap-4 px-0 md:gap-8 w-full mx-0">
          <motion.div
            className="flex flex-col justify-start w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-xl mb-8">
              Have questions about our drone solutions? Contact our team for more
              information or to schedule a demonstration.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={Phone}
                title="Phone"
                content="+1 (555) 123-4567"
              />
              <ContactItem
                icon={Mail}
                title="Email"
                content="contact@aerovantage.com"
              />
              <ContactItem
                icon={MapPin}
                title="Address"
                content="123 Drone Street, Tech City, TC 12345"
              />
              <ContactItem
                icon={Clock}
                title="Working Hours"
                content="Mon - Fri: 9:00 AM - 6:00 PM"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Support Centers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                  <h4 className="font-medium">Main Headquarters</h4>
                  <p className="text-muted-foreground">Tech City, United States</p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                  <h4 className="font-medium">Service Centers</h4>
                  <p className="text-muted-foreground">15 locations worldwide</p>
                </div>
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4">
                  <h4 className="font-medium">Cloud Infrastructure</h4>
                  <p className="text-muted-foreground">Global network of data centers</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className=" flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-card/30 p-6 md:p-8 lg:p-14 border border-border/50 rounded-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                  />
                </div>
                <Button variant="gradient" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

function ContactItem({ icon: Icon, title, content }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}