import Link from 'next/link';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-colco-charcoal text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-gray-300 max-w-xs">
              Limited edition art prints and canvases that bring unique character to any space.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://instagram.com" className="text-gray-300 hover:text-colco-cyan transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-colco-cyan transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://facebook.com" className="text-gray-300 hover:text-colco-cyan transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@colandco.com" className="text-gray-300 hover:text-colco-cyan transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Shop column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-colco-cyan transition-colors">
                  All Artwork
                </Link>
              </li>
              <li>
                <Link href="/shop?medium=print" className="hover:text-colco-cyan transition-colors">
                  Prints
                </Link>
              </li>
              <li>
                <Link href="/shop?medium=canvas" className="hover:text-colco-cyan transition-colors">
                  Canvas
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=new" className="hover:text-colco-cyan transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=limited" className="hover:text-colco-cyan transition-colors">
                  Limited Edition
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Info column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-colco-cyan transition-colors">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-colco-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-colco-cyan transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-colco-cyan transition-colors">
                  Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-colco-cyan transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Stay Updated</h4>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to get updates on new releases and special offers.
            </p>
            <form className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  required
                  className="w-full rounded-md bg-white/10 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-colco-cyan"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-colco-cyan hover:bg-colco-cyan/90 text-white rounded-md py-2 text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} Col & Co. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-colco-cyan transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-colco-cyan transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;