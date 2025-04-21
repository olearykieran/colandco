"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, ArrowRight, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/lib/store/cart';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { items, removeItem, updateItemQuantity, clearCart, totalAmount } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  
  // Handle hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className="min-h-screen py-16 container-custom">Loading cart...</div>;
  }
  
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven't added any artwork to your cart yet.
              Browse our collection to find the perfect piece for your space.
            </p>
            <Button asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted px-6 py-4">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-7">
                      <h2 className="font-medium">Product</h2>
                    </div>
                    <div className="col-span-2 text-center">
                      <h2 className="font-medium">Quantity</h2>
                    </div>
                    <div className="col-span-3 text-right">
                      <h2 className="font-medium">Total</h2>
                    </div>
                  </div>
                </div>
                
                <div className="divide-y">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="p-6">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-7">
                          <div className="flex space-x-4">
                            <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium hover:text-colco-cyan transition-colors">
                                <Link href={`/product/${item.id}`}>{item.name}</Link>
                              </h3>
                              <p className="text-sm text-muted-foreground mb-1">{item.variant}</p>
                              <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                              <button
                                onClick={() => removeItem(item.id, item.variant)}
                                className="text-sm text-muted-foreground hover:text-destructive flex items-center mt-1"
                              >
                                <Trash2 className="h-3 w-3 mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-span-2">
                          <div className="flex items-center justify-center border rounded-md max-w-[120px] mx-auto">
                            <button
                              onClick={() => updateItemQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))}
                              className="px-2 py-1 hover:bg-muted"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 min-w-[30px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateItemQuantity(item.id, item.variant, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-muted"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-3 text-right">
                          <p className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button asChild variant="outline">
                  <Link href="/shop" className="flex items-center">
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 bg-background sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${totalAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-muted-foreground">Calculated at checkout</span>
                  </div>
                  <Separator className="my-3" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button asChild className="w-full">
                  <Link href="/checkout" className="flex items-center justify-center">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <p className="mb-2">We accept:</p>
                  <div className="flex space-x-2">
                    <div className="h-8 w-12 bg-muted rounded-md"></div>
                    <div className="h-8 w-12 bg-muted rounded-md"></div>
                    <div className="h-8 w-12 bg-muted rounded-md"></div>
                    <div className="h-8 w-12 bg-muted rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}