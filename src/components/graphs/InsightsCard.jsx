import React, { useState } from 'react';

const InsightsCard = ({ visitorType = 'Visitors', data = {} }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Default data if none provided
  const defaultData = {
    founders: {
      count: '7.4K',
      increase: '+000%',
      raw: '(000)'
    },
    investors: {
      count: '6.09K',
      increase: '+000%',
      raw: '(000)'
    }
  };
  
  const cardData = Object.keys(data).length > 0 ? data : defaultData;
  
  return (
    <div className="bg-black rounded-xl p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Insights</h2>
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-zinc-900 text-white py-2 px-4 rounded-full flex items-center justify-between"
          >
            {visitorType}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg z-10">
              <div className="py-1">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Visitors
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Connections
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Interactions
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-400 mb-1">Founders</p>
          <div className="flex items-end mb-1">
            <span className="text-3xl font-semibold">{cardData.founders.count}</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 text-xs">{cardData.founders.increase}</span>
            <span className="text-gray-400 text-xs ml-1">{cardData.founders.raw}</span>
          </div>
        </div>
        
        <div>
          <p className="text-gray-400 mb-1">Investors</p>
          <div className="flex items-end mb-1">
            <span className="text-3xl font-semibold">{cardData.investors.count}</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 text-xs">{cardData.investors.increase}</span>
            <span className="text-gray-400 text-xs ml-1">{cardData.investors.raw}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="flex items-center text-sm">
          View detailed insights
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InsightsCard;