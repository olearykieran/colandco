"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg"
            alt="Contact Us"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-colco-charcoal/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Questions, custom requests, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-foreground/80 mb-8">
                Feel free to reach out with any questions about artwork, commissions, or collaborations. We strive to respond to all inquiries within 24 hours.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-colco-cyan/10 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-colco-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:hello@colandco.com" className="text-colco-cyan hover:underline">
                      hello@colandco.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-colco-cyan/10 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-colco-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+1234567890" className="text-colco-cyan hover:underline">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-colco-cyan/10 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-colco-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium">Studio Location</h3>
                    <address className="not-italic text-foreground/80">
                      123 Art District<br />
                      Portland, OR 97201
                    </address>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h3 className="text-lg font-medium mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-colco-charcoal text-white flex items-center justify-center hover:bg-colco-cyan transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-colco-charcoal text-white flex items-center justify-center hover:bg-colco-cyan transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-colco-charcoal text-white flex items-center justify-center hover:bg-colco-cyan transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              {/* Map or Image */}
              <div className="mt-10">
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/1616779/pexels-photo-1616779.jpeg"
                    alt="Studio location"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-foreground/80">
              Find answers to commonly asked questions about orders, artwork, and more.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Do you ship internationally?</h3>
              <p className="text-foreground/70">
                Yes, we ship worldwide. International shipping rates are calculated at checkout based on destination and package size.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How are limited editions verified?</h3>
              <p className="text-foreground/70">
                Each limited edition piece comes with a signed certificate of authenticity and a unique edition number.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Can I commission custom artwork?</h3>
              <p className="text-foreground/70">
                Absolutely! Use the contact form to discuss your ideas and requirements for a custom commission.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">What's your return policy?</h3>
              <p className="text-foreground/70">
                We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, please contact us to arrange a return.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">How do I care for my artwork?</h3>
              <p className="text-foreground/70">
                Avoid direct sunlight and high humidity. Clean with a soft, dry cloth. Framed pieces should be dusted gently.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Do you offer framing services?</h3>
              <p className="text-foreground/70">
                Yes, we partner with professional framers to offer custom framing options. Select this option during checkout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}