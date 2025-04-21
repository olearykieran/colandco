import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Filter, Grid3x3, LayoutList } from 'lucide-react';
import StarRating from '@/components/StarRating';
import { featuredProducts } from '@/lib/data/products';

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg"
            alt="Shop Collection"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-colco-charcoal/60"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Shop Our Collection</h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Browse our curated selection of limited edition prints and canvas artwork
          </p>
        </div>
      </section>
      
      {/* Shop Content */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-medium">Filters</h2>
                    <Filter className="h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  {/* Medium Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Medium</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="medium-print"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="medium-print" className="ml-2 text-sm">
                          Fine Art Print
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="medium-canvas"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="medium-canvas" className="ml-2 text-sm">
                          Canvas Print
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Size Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Size</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="size-small"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="size-small" className="ml-2 text-sm">
                          Small (up to 16")
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="size-medium"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="size-medium" className="ml-2 text-sm">
                          Medium (16" - 24")
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="size-large"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="size-large" className="ml-2 text-sm">
                          Large (24" and up)
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Price Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="price-1"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="price-1" className="ml-2 text-sm">
                          Under $100
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="price-2"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="price-2" className="ml-2 text-sm">
                          $100 - $200
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="price-3"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="price-3" className="ml-2 text-sm">
                          $200 - $300
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="price-4"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="price-4" className="ml-2 text-sm">
                          Over $300
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Availability */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium mb-3">Availability</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="limited"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="limited" className="ml-2 text-sm">
                          Limited Edition
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="in-stock"
                          className="h-4 w-4 rounded border-gray-300 text-colco-cyan focus:ring-colco-cyan"
                        />
                        <label htmlFor="in-stock" className="ml-2 text-sm">
                          In Stock
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sorting and View Options */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <p className="text-muted-foreground">
                    Showing <span className="font-medium text-foreground">{featuredProducts.length}</span> products
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <label htmlFor="sort" className="text-sm mr-2">
                      Sort by:
                    </label>
                    <select
                      id="sort"
                      className="text-sm border rounded-md p-1 pr-8"
                      defaultValue="featured"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                  <div className="flex items-center border rounded-md">
                    <button className="p-2 text-colco-cyan" aria-label="Grid view">
                      <Grid3x3 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-muted-foreground" aria-label="List view">
                      <LayoutList className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product) => (
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
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </Link>
                      {product.isLimited && (
                        <div className="absolute top-2 left-2 bg-colco-yellow text-colco-ink text-xs font-medium px-2 py-1 rounded">
                          Limited Edition
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                      <h3 className="font-medium mt-2 line-clamp-1 hover:text-colco-cyan transition-colors">
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
              
              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="w-9 h-9 p-0" disabled>
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  <Button variant="default" size="sm" className="w-9 h-9 p-0 bg-colco-cyan">
                    <span className="sr-only">Page 1</span>1
                  </Button>
                  <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                    <span className="sr-only">Page 2</span>2
                  </Button>
                  <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                    <span className="sr-only">Page 3</span>3
                  </Button>
                  <Button variant="outline" size="sm" className="w-9 h-9 p-0">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}