const SkeletonCard = () => (
  <div className="card animate-pulse">
    <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-lg mb-4"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-2/3"></div>
    </div>
    <div className="flex space-x-2 mt-4">
      <div className="h-6 w-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="h-6 w-20 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="h-6 w-14 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
    </div>
  </div>
)

const SkeletonProfile = () => (
  <div className="card animate-pulse">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
      <div className="flex-1 space-y-4 w-full">
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-12 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16 mx-auto"></div>
          </div>
          <div className="text-center">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-12 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16 mx-auto"></div>
          </div>
          <div className="text-center">
            <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-12 mx-auto mb-2"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-16 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SkeletonSkill = () => (
  <div className="card animate-pulse">
    <div className="flex justify-between items-center mb-2">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-12"></div>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded-full w-3/4"></div>
    </div>
  </div>
)

export { SkeletonCard, SkeletonProfile, SkeletonSkill }