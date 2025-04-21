"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, CreditCard, Loader2 } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from '@/hooks/use-toast';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalAmount, clearCart } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsLoading(true);

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            name: `${item.name} - ${item.variant}`,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed');
      }

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some artwork to your cart before proceeding to checkout.
          </p>
          <Button asChild variant="outline">
            <Link href="/shop" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.variant}`} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.variant} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <p className="text-muted-foreground mb-4">
                Your payment will be processed securely through Stripe. We accept:
              </p>
              <div className="flex space-x-2">
                <div className="h-8 w-12 bg-muted rounded"></div>
                <div className="h-8 w-12 bg-muted rounded"></div>
                <div className="h-8 w-12 bg-muted rounded"></div>
                <div className="h-8 w-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <div className="bg-background border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Ready to Complete Your Purchase?</h2>
              <p className="text-muted-foreground mb-6">
                Click below to proceed to our secure payment gateway powered by Stripe.
              </p>
              <Button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full h-12 text-lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-5 w-5" />
                    Pay ${totalAmount.toFixed(2)}
                  </>
                )}
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">By proceeding with your purchase, you agree to our:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-foreground">
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <Link href="/cart">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Cart
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}