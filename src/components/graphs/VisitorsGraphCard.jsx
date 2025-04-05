import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const VisitorsCard = ({ timeRange = 'Last 30 days', onTimeRangeChange }) => {
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isMetricDropdownOpen, setIsMetricDropdownOpen] = useState(false);
  const [isAddDropdownOpen, setIsAddDropdownOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState('Visitors');
  const [data, setData] = useState([]);
  
  // Mock data generator
  useEffect(() => {
    const generateData = () => {
      const newData = [];
      let baseValue = 400;
      
      for (let i = 1; i <= 31; i++) {
        const day = i < 10 ? `Mar 0${i}` : `Mar ${i}`;
        // Create some variance in the data
        const randomFactor = Math.random() * 400 + 200;
        // Add a spike around Mar 20
        const spike = i === 20 ? 1000 : 0;
        
        newData.push({
          date: day,
          visitors: Math.round(baseValue + randomFactor + spike),
        });
        
        // Adjust base value for some trend
        baseValue = Math.max(200, baseValue + (Math.random() - 0.5) * 100);
      }
      
      return newData;
    };
    
    setData(generateData());
  }, [timeRange]);

  // Calculate increase percentage and raw increase
  const firstValue = data[0]?.visitors || 0;
  const latestValue = data[data.length - 1]?.visitors || 0;
  const increase = latestValue - firstValue;
  const increasePercentage = firstValue > 0 ? Math.round((increase / firstValue) * 100) : 0;
  
  return (
    <div className="bg-black rounded-xl p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button 
            onClick={() => setIsMetricDropdownOpen(!isMetricDropdownOpen)}
            className="bg-zinc-900 text-white py-2 px-4 rounded-full flex items-center justify-between min-w-24"
          >
            {selectedMetric}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          
          {isMetricDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg z-10">
              <div className="py-1">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => {
                    setSelectedMetric('Visitors');
                    setIsMetricDropdownOpen(false);
                  }}
                >
                  Visitors
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => {
                    setSelectedMetric('Connections');
                    setIsMetricDropdownOpen(false);
                  }}
                >
                  Connections
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => {
                    setSelectedMetric('Interactions');
                    setIsMetricDropdownOpen(false);
                  }}
                >
                  Interactions
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                  onClick={() => {
                    setSelectedMetric('Impressions');
                    setIsMetricDropdownOpen(false);
                  }}
                >
                  Impressions
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="flex space-x-2">
          <div className="relative">
            <button 
              onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
              className="bg-zinc-900 text-white py-2 px-4 rounded-full flex items-center justify-between"
            >
              {timeRange}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            {isTimeDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('Today');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    Today
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('Yesterday');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    Yesterday
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('This week');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    This week
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('Last week');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    Last week
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('Last 7 days');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    Last 7 days
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => {
                      onTimeRangeChange && onTimeRangeChange('Last 30 days');
                      setIsTimeDropdownOpen(false);
                    }}
                  >
                    Last 30 days
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative">
            <button 
              onClick={() => setIsAddDropdownOpen(!isAddDropdownOpen)}
              className="bg-zinc-900 text-white py-2 px-4 rounded-full flex items-center justify-between"
            >
              + Add
            </button>
            
            {isAddDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => setIsAddDropdownOpen(false)}
                  >
                    Connections
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => setIsAddDropdownOpen(false)}
                  >
                    Interactions
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-800"
                    onClick={() => setIsAddDropdownOpen(false)}
                  >
                    Impressions
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mb-2">
        <div className="flex items-end">
          <h1 className="text-4xl font-bold">13.49K</h1>
          <div className="ml-2 flex items-center">
            <span className={`text-sm ${increasePercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {increasePercentage >= 0 ? '+' : '-'}{Math.abs(increasePercentage)}%
            </span>
          </div>
        </div>
        <span className="text-gray-400 text-sm">({Math.abs(increase)})</span>
      </div>
      
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <YAxis 
              domain={['dataMin - 100', 'dataMax + 100']} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              width={20}
            />
            <XAxis 
              dataKey="date" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              interval="preserveStartEnd"
              minTickGap={30}
              tickFormatter={(value) => {
                if (value.includes('01') || value.includes('10') || value.includes('20') || value.includes('30')) {
                  return value.replace('Mar ', '');
                }
                return '';
              }}
            />
            <Line 
              type="monotone" 
              dataKey="visitors" 
              stroke="#ffffff" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsCard;