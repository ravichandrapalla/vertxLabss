import React from 'react'

const TabNavigation = () => {
  return (
    <div className="border-b border-gray-800">
    <div className="flex">
      <button className="flex-1 py-4 border-b-2 border-white font-medium">
        Overview
      </button>
      <button className="flex-1 py-4 text-gray-400">
        Reports
      </button>
      <button className="flex-1 py-4 text-gray-400">
        Demographics
      </button>
    </div>
  </div>
  )
}

export default TabNavigation