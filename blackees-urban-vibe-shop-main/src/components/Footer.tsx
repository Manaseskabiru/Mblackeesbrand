
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    SHOP: ['New Arrivals', 'Hoodies', 'T-Shirts', 'Jeans', 'Accessories', 'Sale'],
    SUPPORT: ['Size Guide', 'Shipping Info', 'Returns', 'FAQ', 'Contact Us', 'Track Order'],
    COMPANY: ['About Us', 'Careers', 'Press', 'Sustainability', 'Affiliate Program', 'Gift Cards'],
  };

  return (
    <footer className="bg-gradient-to-b from-background to-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-6">
              MANASES CLOTHING BRAND
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Bold in Black. Unstoppable in Style. Born in the vibrant streets of Nairobi, where East African culture meets global streetwear.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Follow the movement:</span>
              <div className="flex space-x-3">
                {['IG', 'TW', 'FB'].map((social) => (
                  <div 
                    key={social}
                    className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-white text-xs font-bold">{social}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-lg mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2024 MANASES CLOTHING BRAND • Nairobi, Kenya. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for the rebels.</span>
            </div>

            {/* Back to Top Button */}
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="sm" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
