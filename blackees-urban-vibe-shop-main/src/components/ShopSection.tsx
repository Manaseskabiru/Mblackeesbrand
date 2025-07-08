
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

const ShopSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "REBEL HOODIE",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      category: "HOODIES",
      isNew: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "STREET BOMBER",
      price: 149,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      category: "JACKETS",
      isNew: false,
      rating: 4.9,
    },
    {
      id: 3,
      name: "URBAN TEE",
      price: 45,
      originalPrice: 65,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      category: "T-SHIRTS",
      isNew: true,
      rating: 4.7,
    },
    {
      id: 4,
      name: "NOIR JEANS",
      price: 129,
      originalPrice: 179,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      category: "JEANS",
      isNew: false,
      rating: 4.6,
    },
    {
      id: 5,
      name: "GRUNGE SNEAKERS",
      price: 199,
      originalPrice: 259,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      category: "FOOTWEAR",
      isNew: true,
      rating: 4.9,
    },
    {
      id: 6,
      name: "REBEL CAP",
      price: 39,
      originalPrice: 55,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=500&fit=crop",
      category: "ACCESSORIES",
      isNew: false,
      rating: 4.5,
    },
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            FEATURED <span className="text-gradient">DROPS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Carefully curated pieces that define the streets. Each item tells a story of rebellion and style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover-lift"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-gradient-brand text-white px-3 py-1 text-xs font-bold rounded-full">
                      NEW
                    </span>
                  )}
                  <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0 backdrop-blur-sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Button className="bg-gradient-brand hover:scale-105 transition-transform duration-300">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    ADD TO CART
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2">{product.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({product.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-12"
          >
            VIEW ALL PRODUCTS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
