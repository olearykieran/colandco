import { Skeleton } from "@/components/ui/skeleton";

export default function ProductLoading() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center space-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div>
            <Skeleton className="aspect-square w-full rounded-lg" />
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="aspect-square w-24 rounded-md" />
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-4 w-1/2 mb-6" />
            <Skeleton className="h-6 w-1/3 mb-6" />
            <Skeleton className="h-24 w-full mb-6" />
            
            {/* Product Details */}
            <div className="border-t border-b py-4 mb-6 space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex">
                  <Skeleton className="h-4 w-24 mr-4" />
                  <Skeleton className="h-4 w-32" />
                </div>
              ))}
            </div>
            
            {/* Variant Selection */}
            <Skeleton className="h-10 w-full mb-8" />
            
            {/* Add to Cart */}
            <Skeleton className="h-12 w-full mb-4" />
            
            {/* Tabs */}
            <div className="mt-6">
              <Skeleton className="h-10 w-full mb-4" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}