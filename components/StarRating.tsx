import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  outOf?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  reviewCount?: number;
}

const StarRating = ({
  rating,
  outOf = 5,
  size = 'md',
  showValue = false,
  reviewCount,
}: StarRatingProps) => {
  // Determine star size based on the size prop
  const starSizeMap = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };
  
  const starSize = starSizeMap[size];
  
  // Create an array of stars
  const stars = Array.from({ length: outOf }).map((_, index) => {
    // Calculate the fill amount (0, 0.5, or 1)
    const fillAmount = Math.min(Math.max(rating - index, 0), 1);
    
    return (
      <Star
        key={index}
        className={`${starSize} ${
          fillAmount === 1
            ? 'text-colco-yellow fill-colco-yellow' // Fully filled
            : fillAmount > 0
            ? 'text-colco-yellow' // Half-filled (no fill option in Lucide, so just outline)
            : 'text-gray-300' // Empty
        }`}
      />
    );
  });
  
  return (
    <div className="flex items-center">
      <div className="flex">{stars}</div>
      
      {showValue && (
        <span className={`ml-1 font-medium ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
          {rating.toFixed(1)}
        </span>
      )}
      
      {reviewCount !== undefined && (
        <span className={`ml-1 text-muted-foreground ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : 'text-sm'}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};

export default StarRating;