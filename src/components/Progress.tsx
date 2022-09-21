import React from 'react'

function Progress() {
  return (
    <div>
      <div>
        <h3 className='mb-4'>Progress Bar</h3>
        <div>
        <div className="mb-1 text-base font-medium dark:text-white">Small</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 w-[25%]"></div>
        </div>
        <div className="mb-1 text-base font-medium dark:text-white">Default</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-[25%]"></div>
        </div>
        <div className="mb-1 text-lg font-medium dark:text-white">Large</div>
        <div className="mb-4 w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-[25%]"></div>
        </div>
        <div className="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
        <div className="w-full h-6 bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="h-6 bg-blue-600 rounded-full dark:bg-blue-500 w-[25%]"></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Progress