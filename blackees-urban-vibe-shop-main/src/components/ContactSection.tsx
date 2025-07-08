
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL US",
      info: "manaseskabiru@gmail.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Phone,
      title: "CALL US",
      info: "0798854 988",
      description: "Mon-Fri 9AM-6PM EAT"
    },
    {
      icon: MapPin,
      title: "VISIT US",
      info: "KENYA,NAIROBI,RUAI",
      description: "Flagship store & HQ"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join the rebellion? Have questions? We're here to help you express your unstoppable style from the heart of Nairobi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 justify-center">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-3 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={info.title} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-primary font-semibold mb-1">{info.info}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Social Links */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border max-w-md mx-auto">
              <h3 className="text-lg font-bold mb-4 text-center">FOLLOW THE MOVEMENT</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
