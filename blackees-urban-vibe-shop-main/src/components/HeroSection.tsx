
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-purple-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float-animation"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white rounded-full float-animation" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold leading-tight">
              <span className="block">MANASES</span>
              <span className="block text-gradient">CLOTHING</span>
              <span className="block">BRAND</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Where <span className="text-primary font-semibold">bold meets beautiful</span>. 
              Discover M‑Blackees' exclusive collection of urban streetwear that speaks your language.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="bg-gradient-brand hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              SHOP NOW
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6"
            >
              EXPLORE COLLECTION
            </Button>
          </div>

          {/* Social Proof */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-sm text-muted-foreground mb-4">TRUSTED BY THOUSANDS OF REBELS</p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-2xl font-bold">10K+</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold">HAPPY CUSTOMERS</div>
              <div className="w-px h-6 bg-border"></div>
              <div className="text-2xl font-bold text-yellow-500">5★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
