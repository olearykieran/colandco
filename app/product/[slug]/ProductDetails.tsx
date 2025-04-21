"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Minus, Plus, Check, ShoppingCart, ArrowLeft } from "lucide-react";
import StarRating from "@/components/StarRating";
import { useCartStore } from "@/lib/store/cart";
import { toast } from "@/hooks/use-toast";
import { featuredProducts } from "@/lib/data/products";

interface ProductDetailsProps {
  product: typeof featuredProducts[0];
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addItem } = useCartStore();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: selectedVariant.price,
      image: product.images[0],
      quantity,
      variant: selectedVariant.name,
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const incrementQuantity = () => {
    if (quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <Link href="/shop" className="text-muted-foreground hover:text-foreground">
            Shop
          </Link>
          <span className="mx-2 text-muted-foreground">/</span>
          <span className="font-medium">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.isLimited && (
                <div className="absolute top-4 left-4 bg-colco-yellow text-colco-ink text-xs font-medium px-3 py-1 rounded-full">
                  Limited Edition
                </div>
              )}
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square w-24 overflow-hidden rounded-md ${
                    activeImage === index ? "ring-2 ring-colco-cyan" : "ring-1 ring-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <Link href="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-colco-cyan mb-4">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to shop
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <StarRating rating={product.rating} showValue={true} reviewCount={product.reviewCount} />
            </div>
            
            <div className="mb-6">
              <span className="text-2xl font-semibold">${selectedVariant.price.toFixed(2)}</span>
              <span className="text-sm text-muted-foreground ml-2">
                {product.available} available
              </span>
            </div>
            
            <div className="mb-6">
              <p className="text-foreground/80">{product.description}</p>
            </div>
            
            {/* Product Details */}
            <div className="border-t border-b py-4 mb-6 space-y-4">
              <div className="flex flex-wrap">
                <span className="w-24 text-sm font-medium">Medium:</span>
                <span className="text-sm">{product.medium}</span>
              </div>
              <div className="flex flex-wrap">
                <span className="w-24 text-sm font-medium">Dimensions:</span>
                <span className="text-sm">
                  {product.dimensions.width}×{product.dimensions.height} {product.dimensions.unit}
                </span>
              </div>
              {product.isLimited && (
                <div className="flex flex-wrap">
                  <span className="w-24 text-sm font-medium">Edition:</span>
                  <span className="text-sm">Limited to 25 prints</span>
                </div>
              )}
            </div>
            
            {/* Variant Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.name}
                    onClick={() => setSelectedVariant(variant)}
                    className={`relative px-4 py-2 rounded-md text-sm border ${
                      selectedVariant.name === variant.name
                        ? "border-colco-cyan bg-colco-cyan/10 text-colco-cyan"
                        : "border-border bg-background text-foreground hover:border-colco-cyan/50"
                    }`}
                  >
                    {variant.name}
                    {selectedVariant.name === variant.name && (
                      <span className="absolute -top-1 -right-1 h-4 w-4 bg-colco-cyan text-white rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="h-10 w-10 flex items-center justify-center border rounded-l-md bg-muted disabled:opacity-50"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <div className="h-10 w-12 flex items-center justify-center border-t border-b">
                  {quantity}
                </div>
                <button
                  onClick={incrementQuantity}
                  disabled={quantity >= product.available}
                  className="h-10 w-10 flex items-center justify-center border rounded-r-md bg-muted disabled:opacity-50"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart */}
            <Button 
              onClick={handleAddToCart} 
              size="lg" 
              className="mb-4"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            
            {/* Additional Info Tabs */}
            <Tabs defaultValue="details" className="mt-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
                <TabsTrigger value="returns">Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Each {product.medium.toLowerCase()} is produced using the finest archival materials to ensure longevity and color fidelity. The piece is individually inspected for quality and includes a signed certificate of authenticity.
                </p>
              </TabsContent>
              <TabsContent value="shipping" className="pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free shipping on all orders over $150. Standard delivery takes 3-5 business days. All artwork is carefully packaged in custom protective materials to ensure it arrives in perfect condition.
                </p>
              </TabsContent>
              <TabsContent value="returns" className="pt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We offer a 30-day return policy. If you're not completely satisfied with your purchase, contact us for a return authorization and full refund. Custom framed pieces cannot be returned unless damaged in transit.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}