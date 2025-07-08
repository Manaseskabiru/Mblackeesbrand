
import React from 'react';
import { Card } from '@/components/ui/card';
import { Zap, Users, Award, Truck } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: "BOLD DESIGNS",
      description: "Every piece is crafted to make a statement. We don't follow trends – we create them."
    },
    {
      icon: Users,
      title: "COMMUNITY DRIVEN",
      description: "Built by rebels, for rebels. Our community shapes every design and decision we make."
    },
    {
      icon: Award,
      title: "PREMIUM QUALITY",
      description: "Only the finest materials make it into our collection. Quality that lasts, style that endures."
    },
    {
      icon: Truck,
      title: "FAST DELIVERY",
      description: "Express shipping worldwide. Your style shouldn't have to wait."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-card/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/5 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                BORN FROM THE <span className="text-gradient">STREETS</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                M‑Blackees isn't just a brand – it's a movement. We started in the underground, 
                creating clothes for those who refuse to blend in.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold mb-2">OUR MISSION</h3>
                <p className="text-muted-foreground">
                  To empower the youth with clothing that reflects their inner rebel. 
                  Every stitch tells a story of freedom, creativity, and unapologetic self-expression.
                </p>
              </div>

              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-2xl font-bold mb-2">OUR VISION</h3>
                <p className="text-muted-foreground">
                  A world where everyone has the confidence to stand out, speak up, 
                  and wear their individuality with pride.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop" 
                alt="M-Blackees Style" 
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 float-animation"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-10 float-animation" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-8 text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover-lift group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-muted-foreground font-medium">REBELS WORLDWIDE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">200+</div>
              <div className="text-muted-foreground font-medium">UNIQUE DESIGNS</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">15</div>
              <div className="text-muted-foreground font-medium">COUNTRIES</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground font-medium">SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
