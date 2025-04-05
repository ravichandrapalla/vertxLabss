import React, { useState, useEffect } from 'react';
import VisitorsCard from '../components/graphs/VisitorsGraphCard';
import InsightsCard from '../components/graphs/InsightsCard';
import DemographicsCard from '../components/graphs/DemographicsCard';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [visitorType, setVisitorType] = useState('Visitors');
  const [insightsData, setInsightsData] = useState({});
  
  // Simulate data changes based on visitor type and time range
  useEffect(() => {
    // This would be an API call in a real application
    const fetchData = () => {
      // Generate different data based on selected options
      if (visitorType === 'Visitors') {
        setInsightsData({
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
        });
      } else if (visitorType === 'Connections') {
        setInsightsData({
          founders: {
            count: '3.2K',
            increase: '+180%',
            raw: '(120)'
          },
          investors: {
            count: '2.8K',
            increase: '+150%',
            raw: '(105)'
          }
        });
      } else {
        setInsightsData({
          founders: {
            count: '5.1K',
            increase: '+210%',
            raw: '(155)'
          },
          investors: {
            count: '4.3K',
            increase: '+190%',
            raw: '(142)'
          }
        });
      }
    };
    
    fetchData();
  }, [visitorType, timeRange]);
  
  const handleTimeRangeChange = (newTimeRange) => {
    setTimeRange(newTimeRange);
  };
  
  // const handleVisitorTypeChange = (newType) => {
  //   setVisitorType(newType);
  // };
  
  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <VisitorsCard 
        timeRange={timeRange} 
        onTimeRangeChange={handleTimeRangeChange} 
      />
      
      {/* <InsightsCard 
        visitorType={visitorType} 
        data={insightsData} 
      />
      
      <DemographicsCard 
        visitorType={visitorType} 
      /> */}
    </div>
  );
};

export default Dashboard;