import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blurred.png"
            alt="About Col & Co"
            fill
            priority
            className="object-cover object-center brightness-[0.6]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Artist</h1>
            <p className="text-lg md:text-xl text-white/90">
              The story behind Col & Co and our commitment to bringing unique, expressive
              art into your spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Bio */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-24 h-24 bg-colco-yellow rounded-full absolute -left-6 -top-6 z-0"></div>
                <div className="relative z-10">
                  <Image
                    src="/images/col2.jpeg"
                    alt="Colin in the studio"
                    width={600}
                    height={700}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Colin's Journey</h2>
              <p className="text-foreground/80 mb-4">
                Colin's artistic journey began over a decade ago after leaving a corporate
                design role to pursue his passion for creating impactful visual art.
                Drawing inspiration from natural landscapes and urban environments, his
                work explores the intersection of organic forms and geometric precision.
              </p>
              <p className="text-foreground/80 mb-6">
                Each piece is created through a thoughtful process of layering colors and
                textures to evoke emotional responses and create conversation. Colin's
                distinctive style has evolved to focus on limited edition prints and
                canvases that bring unique character to any space.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-colco-cyan"></div>
                <p className="text-lg font-medium italic">
                  "Art should evoke feeling, spark conversation, and transform spaces."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">The Creative Process</h2>
            <p className="text-lg text-foreground/80">
              From initial concept to final piece, each artwork goes through a thoughtful
              development process to ensure quality and artistic integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-colco-cyan/10 text-colco-cyan rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspiration & Concept</h3>
              <p className="text-foreground/80">
                Each collection begins with exploration—sketching concepts, gathering
                visual references, and developing a cohesive theme or narrative.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-colco-cyan/10 text-colco-cyan rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Creation & Refinement</h3>
              <p className="text-foreground/80">
                The artistic process involves multiple iterations, layering techniques,
                and careful color selection to achieve the desired visual and emotional
                impact.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-colco-cyan/10 text-colco-cyan rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Production & Quality</h3>
              <p className="text-foreground/80">
                Only the finest archival materials are used to create limited edition
                prints and canvas pieces, ensuring longevity and color fidelity.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1646953/pexels-photo-1646953.jpeg"
                alt="Studio workspace"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Values & Mission</h2>
              <p className="text-foreground/80 mb-4">
                At Col & Co, we believe in creating art that resonates on a personal
                level. Our mission is to make distinctive, high-quality artwork accessible
                to collectors and art enthusiasts who value unique expression.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-colco-green/10 text-colco-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Quality Without Compromise</h3>
                    <p className="text-sm text-foreground/70">
                      Every piece is created using archival materials and printed with
                      precision to ensure lasting quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-colco-green/10 text-colco-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Authentic Expression</h3>
                    <p className="text-sm text-foreground/70">
                      Each artwork represents a genuine exploration of ideas, emotions,
                      and visual language.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-colco-green/10 text-colco-green rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sustainable Practices</h3>
                    <p className="text-sm text-foreground/70">
                      We're committed to minimizing environmental impact through
                      responsible material sourcing and packaging.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild>
                <Link href="/contact" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg"
                      alt="Studio detail"
                      width={300}
                      height={400}
                      className="object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/7147853/pexels-photo-7147853.jpeg"
                      alt="Art materials"
                      width={300}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src="https://images.pexels.com/photos/1048283/pexels-photo-1048283.jpeg"
                      alt="In the studio"
                      width={300}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-colco-charcoal text-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-white/80 text-lg mb-8">
              Interested in commissioning a custom piece or have questions about the
              artwork? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-colco-cyan hover:bg-colco-cyan/90">
                <Link href="/contact" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Colin
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/shop">Browse Collection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Check(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
