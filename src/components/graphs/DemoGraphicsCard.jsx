import React, { useState, useEffect } from 'react';

const DemographicsCard = ({ visitorType = 'Visitors' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countryData, setCountryData] = useState([
    { country: "India", percentage: 40, color: "#FF9933" },
    { country: "USA", percentage: 25, color: "#3C3B6E" },
    { country: "CANADA", percentage: 10, color: "#FF0000" },
    { country: "UAE", percentage: 7, color: "#00732F" }
  ]);
  
  // Update countries based on the selected visitor type (mock dynamic behavior)
  useEffect(() => {
    if (visitorType === 'Connections') {
      setCountryData([
        { country: "India", percentage: 35, color: "#FF9933" },
        { country: "USA", percentage: 30, color: "#3C3B6E" },
        { country: "CANADA", percentage: 15, color: "#FF0000" },
        { country: "UAE", percentage: 10, color: "#00732F" }
      ]);
    } else if (visitorType === 'Interactions') {
      setCountryData([
        { country: "India", percentage: 45, color: "#FF9933" },
        { country: "USA", percentage: 20, color: "#3C3B6E" },
        { country: "CANADA", percentage: 12, color: "#FF0000" },
        { country: "UAE", percentage: 8, color: "#00732F" }
      ]);
    } else {
      setCountryData([
        { country: "India", percentage: 40, color: "#FF9933" },
        { country: "USA", percentage: 25, color: "#3C3B6E" },
        { country: "CANADA", percentage: 10, color: "#FF0000" },
        { country: "UAE", percentage: 7, color: "#00732F" }
      ]);
    }
  }, [visitorType]);
  
  return (
    <div className="bg-black rounded-xl p-4 text-white">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Demographics</h2>
      </div>
      
      <div className="relative mb-4">
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
          <div className="absolute top-full left-0 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg z-10">
            <div className="py-1">
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Visitors
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Connections
              </button>
              <button 
                className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
              >
                Interactions
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="mb-4 relative">
        <div className="w-full h-48 relative flex items-center justify-center">
          {/* World map using dotted pattern */}
          <div className="absolute inset-0 opacity-60">
            <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
              <g fill="#333">
                {/* Generate a pattern of dots resembling a world map */}
                {Array.from({ length: 200 }).map((_, i) => (
                  <circle 
                    key={i} 
                    cx={Math.random() * 1000} 
                    cy={Math.random() * 500} 
                    r="2" 
                  />
                ))}
              </g>
              
              {/* Colored dots for countries */}
              <circle cx="750" cy="230" r="6" fill={countryData[0].color} />
              <circle cx="250" cy="200" r="6" fill={countryData[1].color} />
              <circle cx="200" cy="150" r="6" fill={countryData[2].color} />
              <circle cx="580" cy="220" r="6" fill={countryData[3].color} />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-2 flex space-x-3">
          {countryData.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs">{item.country}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        {countryData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={`/flags/${item.country.toLowerCase()}.png`} 
                alt={`${item.country} flag`}
                className="w-6 h-4 mr-2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/24/16";
                }}
              />
              <span className="font-medium">{item.country}</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-2 bg-gray-700 rounded-full mr-2 overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${item.percentage}%`, 
                    backgroundColor: item.color 
                  }}
                ></div>
              </div>
              <span className="text-sm">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="flex items-center text-sm">
          View all countries
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DemographicsCard;