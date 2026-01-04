export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200 animate-pulse" />
      
      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        {/* Title Skeleton */}
        <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse" />
        
        {/* Price Skeleton */}
        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
        
        {/* Button Skeleton */}
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

