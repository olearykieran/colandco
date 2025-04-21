"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store/cart';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const clearCart = useCartStore((state) => state.clearCart);
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen py-16 flex items-center justify-center">
      <div className="container-custom max-w-2xl text-center">
        <div className="bg-background border rounded-lg p-8">
          <div className="w-16 h-16 bg-colco-green/10 text-colco-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your order has been successfully processed. You will receive a confirmation email shortly.
          </p>
          
          <div className="space-y-4">
            <Button asChild size="lg">
              <Link href="/shop" className="flex items-center">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Having issues? <Link href="/contact" className="text-colco-cyan hover:underline">Contact our support team</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}