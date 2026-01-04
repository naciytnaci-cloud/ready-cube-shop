export default function ProductDetailSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb Skeleton */}
        <div className="mb-12 h-4 bg-gray-200 rounded w-48 animate-pulse" />

        {/* Hero Section Skeleton */}
        <div className="mb-16 space-y-4">
          {/* Title Skeleton */}
          <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
        </div>

        {/* Image Skeleton */}
        <div className="mb-16 aspect-[3/2] lg:aspect-[16/10] bg-gray-200 rounded-xl animate-pulse" />

        {/* Features Skeleton */}
        <div className="mb-16">
          <div className="h-8 bg-gray-200 rounded w-32 mb-8 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-4 p-6 bg-white border border-gray-200 rounded-lg">
                <div className="w-6 h-6 bg-gray-200 rounded flex-shrink-0 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded flex-1 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center max-w-md mx-auto">
          <div className="h-14 bg-gray-200 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  )
}

