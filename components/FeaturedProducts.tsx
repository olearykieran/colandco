"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShoppingCart, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart';
import { toast } from '@/hooks/use-toast';
import { featuredProducts } from '@/lib/data/products';

const FeaturedProducts = () => {
  const { addItem } = useCartStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 4;
  const totalPages = Math.ceil(featuredProducts.length / productsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredProducts.length - productsPerPage ? 0 : prevIndex + productsPerPage
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredProducts.length - productsPerPage : prevIndex - productsPerPage
    );
  };
  
  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      variant: product.variants[0].name,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.slice(currentIndex, currentIndex + productsPerPage).map((product) => (
          <div 
            key={product.id} 
            className="group bg-background rounded-lg overflow-hidden border border-border transition-all hover:shadow-md"
          >
            <div className="relative aspect-square overflow-hidden">
              <Link href={`/product/${product.slug}`}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </Link>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex space-x-2">
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="bg-white text-colco-ink hover:bg-colco-cyan hover:text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="bg-white text-colco-ink hover:bg-colco-cyan hover:text-white"
                    asChild
                  >
                    <Link href={`/product/${product.slug}`}>
                      <Eye className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              {product.isLimited && (
                <div className="absolute top-2 left-2 bg-colco-yellow text-colco-ink text-xs font-medium px-2 py-1 rounded">
                  Limited Edition
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < product.rating ? 'text-colco-yellow fill-colco-yellow' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
              </div>
              <h3 className="font-medium line-clamp-1 hover:text-colco-cyan transition-colors">
                <Link href={`/product/${product.slug}`}>{product.name}</Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{product.medium}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">${product.price.toFixed(2)}</span>
                <span className="text-xs text-muted-foreground">
                  {product.available} available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={prevSlide}
            className="h-8 w-8 rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Button
              key={index}
              variant={currentIndex / productsPerPage === index ? "default" : "outline"}
              className={`h-8 w-8 rounded-full ${currentIndex / productsPerPage === index ? 'bg-colco-cyan' : ''}`}
              onClick={() => setCurrentIndex(index * productsPerPage)}
            >
              {index + 1}
            </Button>
          ))}
          <Button 
            variant="outline" 
            size="icon" 
            onClick={nextSlide}
            className="h-8 w-8 rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeaturedProducts;