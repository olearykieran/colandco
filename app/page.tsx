import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FeaturedProducts from "@/components/FeaturedProducts";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/FIPINES.png"
            alt="FIPINES Hero Image"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-colco-charcoal/70 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Express Your Style with <span className="text-colco-cyan">Premium</span>{" "}
              Merchandise
            </h1>
            <p
              className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Discover our collection of high-quality custom merchandise, from mugs to
              caps and pins.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button asChild size="lg" className="font-medium">
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="/shop" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <FeaturedProducts />
          <div className="mt-12 flex justify-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/shop" className="group">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  );
}
