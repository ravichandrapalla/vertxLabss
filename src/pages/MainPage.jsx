import Dropdown from "../components/ui/Dropdown";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, Plus } from "lucide-react";
import MetricsChart from "../components/graphs/MatricsChart";
import VisiorsGraphCard from "../components/graphs/VisitorsGraphCard";

import InsightsCard from "../components/graphs/InsightsCard";
import DemographicsCard from "../components/graphs/DemoGraphicsCard";
import { useDispatch, useSelector } from "react-redux";
import TabsContainer from "../components/TabsContainer";
import { setActiveTab } from "../redux/slices/activeTabSlice";

const mockData = {
  visitors: {
    total: 13490,
    growth: "+469%",
    valueChange: "(897)",
    timeSeriesData: {
      today: [
        { date: "Mar 5 9AM", value: 400 },
        { date: "Mar 5 12PM", value: 800 },
        { date: "Mar 5 3PM", value: 1200 },
        { date: "Mar 5 6PM", value: 900 },
      ],
      yesterday: [
        { date: "Mar 4 9AM", value: 300 },
        { date: "Mar 4 12PM", value: 700 },
        { date: "Mar 4 3PM", value: 1100 },
        { date: "Mar 4 6PM", value: 800 },
      ],
      thisWeek: [
        { date: "Mon", value: 800 },
        { date: "Tue", value: 900 },
        { date: "Wed", value: 1200 },
        { date: "Thu", value: 1100 },
        { date: "Fri", value: 1000 },
      ],
      lastWeek: [
        { date: "Mon", value: 700 },
        { date: "Tue", value: 800 },
        { date: "Wed", value: 900 },
        { date: "Thu", value: 850 },
        { date: "Fri", value: 950 },
      ],
      last7days: [
        { date: "Mar 1", value: 900 },
        { date: "Mar 2", value: 800 },
        { date: "Mar 3", value: 1000 },
        { date: "Mar 4", value: 1100 },
        { date: "Mar 5", value: 1200 },
        { date: "Mar 6", value: 900 },
        { date: "Mar 7", value: 1000 },
      ],
      last30days: [
        { date: "Mar 1", value: 400 },
        { date: "Mar 5", value: 1200 },
        { date: "Mar 10", value: 1100 },
        { date: "Mar 15", value: 800 },
        { date: "Mar 20", value: 1600 },
        { date: "Mar 25", value: 1000 },
        { date: "Mar 30", value: 1400 },
      ],
    },
    demographicsData: {
      India: 40,
      USA: 25,
      CANADA: 10,
      UAE: 7,
      UK: 5,
      Australia: 3,
    },
    insights: {
      founders: {
        total: "7.4K",
        growth: "+420%",
        valueChange: "(840)",
      },
      investors: {
        total: "6.09K",
        growth: "+380%",
        valueChange: "(720)",
      },
    },
  },
  connections: {
    total: 3490,
    growth: "+180%",
    valueChange: "(497)",
    timeSeriesData: {
      today: [
        { date: "Mar 5 9AM", value: 300 },
        { date: "Mar 5 12PM", value: 600 },
        { date: "Mar 5 3PM", value: 900 },
        { date: "Mar 5 6PM", value: 700 },
      ],
      yesterday: [
        { date: "Mar 4 9AM", value: 250 },
        { date: "Mar 4 12PM", value: 550 },
        { date: "Mar 4 3PM", value: 850 },
        { date: "Mar 4 6PM", value: 650 },
      ],
      thisWeek: [
        { date: "Mon", value: 600 },
        { date: "Tue", value: 700 },
        { date: "Wed", value: 900 },
        { date: "Thu", value: 800 },
        { date: "Fri", value: 750 },
      ],
      lastWeek: [
        { date: "Mon", value: 500 },
        { date: "Tue", value: 600 },
        { date: "Wed", value: 700 },
        { date: "Thu", value: 650 },
        { date: "Fri", value: 700 },
      ],
      last7days: [
        { date: "Mar 1", value: 700 },
        { date: "Mar 2", value: 600 },
        { date: "Mar 3", value: 800 },
        { date: "Mar 4", value: 900 },
        { date: "Mar 5", value: 1000 },
        { date: "Mar 6", value: 700 },
        { date: "Mar 7", value: 800 },
      ],
      last30days: [
        { date: "Mar 1", value: 300 },
        { date: "Mar 5", value: 1000 },
        { date: "Mar 10", value: 400 },
        { date: "Mar 15", value: 900 },
        { date: "Mar 20", value: 800 },
        { date: "Mar 25", value: 1200 },
        { date: "Mar 30", value: 900 },
      ],
    },
    demographicsData: {
      India: 35,
      USA: 30,
      CANADA: 12,
      UAE: 8,
      UK: 7,
      Australia: 4,
    },
    insights: {
      founders: {
        total: "4.2K",
        growth: "+210%",
        valueChange: "(375)",
      },
      investors: {
        total: "3.7K",
        growth: "+170%",
        valueChange: "(310)",
      },
    },
  },
  interactions: {
    total: 5600,
    growth: "+120%",
    valueChange: "(395)",
    timeSeriesData: {
      today: [
        { date: "Mar 5 9AM", value: 200 },
        { date: "Mar 5 12PM", value: 500 },
        { date: "Mar 5 3PM", value: 800 },
        { date: "Mar 5 6PM", value: 600 },
      ],
      yesterday: [
        { date: "Mar 4 9AM", value: 180 },
        { date: "Mar 4 12PM", value: 480 },
        { date: "Mar 4 3PM", value: 780 },
        { date: "Mar 4 6PM", value: 580 },
      ],
      thisWeek: [
        { date: "Mon", value: 500 },
        { date: "Tue", value: 600 },
        { date: "Wed", value: 800 },
        { date: "Thu", value: 700 },
        { date: "Fri", value: 650 },
      ],
      lastWeek: [
        { date: "Mon", value: 450 },
        { date: "Tue", value: 550 },
        { date: "Wed", value: 650 },
        { date: "Thu", value: 600 },
        { date: "Fri", value: 600 },
      ],
      last7days: [
        { date: "Mar 1", value: 600 },
        { date: "Mar 2", value: 550 },
        { date: "Mar 3", value: 700 },
        { date: "Mar 4", value: 800 },
        { date: "Mar 5", value: 850 },
        { date: "Mar 6", value: 650 },
        { date: "Mar 7", value: 700 },
      ],
      last30days: [
        { date: "Mar 1", value: 200 },
        { date: "Mar 5", value: 800 },
        { date: "Mar 10", value: 600 },
        { date: "Mar 15", value: 700 },
        { date: "Mar 20", value: 900 },
        { date: "Mar 25", value: 600 },
        { date: "Mar 30", value: 1000 },
      ],
    },
    demographicsData: {
      India: 38,
      USA: 28,
      CANADA: 13,
      UAE: 6,
      UK: 8,
      Australia: 5,
    },
    insights: {
      founders: {
        total: "5.8K",
        growth: "+150%",
        valueChange: "(420)",
      },
      investors: {
        total: "4.9K",
        growth: "+130%",
        valueChange: "(355)",
      },
    },
  },
  impressions: {
    total: 8700,
    growth: "+250%",
    valueChange: "(765)",
    timeSeriesData: {
      today: [
        { date: "Mar 5 9AM", value: 350 },
        { date: "Mar 5 12PM", value: 700 },
        { date: "Mar 5 3PM", value: 1100 },
        { date: "Mar 5 6PM", value: 800 },
      ],
      yesterday: [
        { date: "Mar 4 9AM", value: 320 },
        { date: "Mar 4 12PM", value: 650 },
        { date: "Mar 4 3PM", value: 980 },
        { date: "Mar 4 6PM", value: 700 },
      ],
      thisWeek: [
        { date: "Mon", value: 750 },
        { date: "Tue", value: 850 },
        { date: "Wed", value: 1100 },
        { date: "Thu", value: 1000 },
        { date: "Fri", value: 900 },
      ],
      lastWeek: [
        { date: "Mon", value: 650 },
        { date: "Tue", value: 750 },
        { date: "Wed", value: 850 },
        { date: "Thu", value: 800 },
        { date: "Fri", value: 850 },
      ],
      last7days: [
        { date: "Mar 1", value: 800 },
        { date: "Mar 2", value: 750 },
        { date: "Mar 3", value: 900 },
        { date: "Mar 4", value: 1000 },
        { date: "Mar 5", value: 1100 },
        { date: "Mar 6", value: 850 },
        { date: "Mar 7", value: 900 },
      ],
      last30days: [
        { date: "Mar 1", value: 300 },
        { date: "Mar 5", value: 900 },
        { date: "Mar 10", value: 1000 },
        { date: "Mar 15", value: 700 },
        { date: "Mar 20", value: 1200 },
        { date: "Mar 25", value: 800 },
        { date: "Mar 30", value: 1300 },
      ],
    },
    demographicsData: {
      India: 42,
      USA: 23,
      CANADA: 9,
      UAE: 8,
      UK: 6,
      Australia: 4,
    },
    insights: {
      founders: {
        total: "8.1K",
        growth: "+290%",
        valueChange: "(850)",
      },
      investors: {
        total: "7.2K",
        growth: "+230%",
        valueChange: "(690)",
      },
    },
  },
};
const mockCountriesData = {
  India: 23.5,
  USA: 18.2,
  CANADA: 12.7,
  UAE: 9.4,
  UK: 8.6,
  Australia: 7.3,
};
const MainPage = () => {
  const { activeTab } = useSelector((state) => state.activeTab);
  const [metricType, setMetricType] = useState("visitors");
  const [timeRange, setTimeRange] = useState("last30days");
  const [insightType, setInsightType] = useState("visitors");
  const [demographicType, setDemographicType] = useState("visitors");

  // Comparison chart state
  const [comparisonMetric, setComparisonMetric] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  // Dropdown open states
  const [metricDropdownOpen, setMetricDropdownOpen] = useState(false);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [addDropdownOpen, setAddDropdownOpen] = useState(false);
  const [insightDropdownOpen, setInsightDropdownOpen] = useState(false);
  const [demographicDropdownOpen, setDemographicDropdownOpen] = useState(false);

  // Current data states
  const [currentMetricData, setCurrentMetricData] = useState([]);
  const [currentComparisonData, setCurrentComparisonData] = useState([]);
  // const [currentInsightData, setCurrentInsightData] = useState(
  //   insightsData.visitors
  // );
  const [currentDemographicData, setCurrentDemographicData] = useState({});

  // Colors for charts
  const [primaryColor, setPrimaryColor] = useState("#fff");
  const [secondaryColor, setSecondaryColor] = useState("#9333EA");
  const dispatch = useDispatch();

  // Update primary metric data when selection changes
  useEffect(() => {
    setCurrentMetricData(mockData[metricType].timeSeriesData[timeRange]);
    setCurrentDemographicData(mockData[metricType].demographicsData);

    // Set primary color based on metric type
    switch (metricType) {
      case "connections":
        setPrimaryColor("#9333EA"); // purple for connections
        break;
      case "interactions":
        setPrimaryColor("#22C55E"); // green for interactions
        break;
      case "impressions":
        setPrimaryColor("#3B82F6"); // blue for impressions
        break;
      default:
        setPrimaryColor("#fff"); // white for visitors
    }

    // Update comparison data if comparison is active
    if (comparisonMetric && showComparison) {
      setCurrentComparisonData(
        mockData[comparisonMetric].timeSeriesData[timeRange]
      );
    }
  }, [metricType, timeRange, comparisonMetric, showComparison]);

  // Update insights data when selection changes
  // useEffect(() => {
  //   setCurrentInsightData(insightsData[insightType]);
  // }, [insightType]);

  // Handle adding comparison metric
  const handleAddComparison = (metric) => {
    if (metric === metricType) {
      // Don't allow comparing the same metric
      return;
    }

    setComparisonMetric(metric);
    setShowComparison(true);
    setCurrentComparisonData(mockData[metric].timeSeriesData[timeRange]);

    // Set secondary color based on comparison metric
    switch (metric) {
      case "connections":
        setSecondaryColor("#9333EA"); // purple for connections
        break;
      case "interactions":
        setSecondaryColor("#22C55E"); // green for interactions
        break;
      case "impressions":
        setSecondaryColor("#3B82F6"); // blue for impressions
        break;
      default:
        setSecondaryColor("#fff"); // white for visitors
    }
  };

  // Remove comparison
  const removeComparison = () => {
    setShowComparison(false);
    setComparisonMetric(null);
  };

  // Dropdown options
  const metricOptions = [
    { label: "Visitors", value: "visitors" },
    { label: "Connections", value: "connections" },
    { label: "Interactions", value: "interactions" },
    { label: "Impressions", value: "impressions" },
  ];

  const timeOptions = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "This week", value: "thisWeek" },
    { label: "Last week", value: "lastWeek" },
    { label: "Last 7 days", value: "last7days" },
    { label: "Last 30 days", value: "last30days" },
  ];

  const addOptions = metricOptions.filter(
    (option) => option.value !== metricType
  );

  const insightOptions = [
    { label: "Visitors", value: "visitors" },
    { label: "Connections", value: "connections" },
    { label: "Interactions", value: "interactions" },
    { label: "Impressions", value: "impressions" },
  ];

  const demographicOptions = [
    { label: "Visitors", value: "visitors" },
    { label: "Connections", value: "connections" },
    { label: "Interactions", value: "interactions" },
    { label: "Impressions", value: "impressions" },
  ];
  const getActiveTab = () => {
    if (activeTab === "Overview") {
      return (
        <div className="flex flex-col space-y-4 md:space-x-4 w-full bg-[#1D1D1D] text-white p-4 md:grid md:grid-cols-[612px_1fr] md:grid-rows-[273px_296px] md:h-[calc(100vh-150px)] md:w-[100vw-240px]">
          <div className=" max-h-[270px] rounded-2xl overflow-hidden bg-[#000000] ">
            <VisiorsGraphCard
              metricType={metricType}
              setMetricType={setMetricType}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              metricOptions={metricOptions}
              timeOptions={timeOptions}
              addOptions={addOptions}
              showComparison={showComparison}
              comparisonMetric={comparisonMetric}
              currentMetricData={currentMetricData}
              currentComparisonData={currentComparisonData}
              mockData={mockData}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
              metricDropdownOpen={metricDropdownOpen}
              setMetricDropdownOpen={setMetricDropdownOpen}
              timeDropdownOpen={timeDropdownOpen}
              setTimeDropdownOpen={setTimeDropdownOpen}
              addDropdownOpen={addDropdownOpen}
              setAddDropdownOpen={setAddDropdownOpen}
              handleAddComparison={handleAddComparison}
              removeComparison={removeComparison}
            />
          </div>
          <div className="h-[180px] rounded-2xl overflow-hidden bg-[#000000] md:h-[94%] w-full">
            <InsightsCard
              insightType={insightType}
              setInsightType={setInsightType}
              insightOptions={metricOptions}
              insightDropdownOpen={insightDropdownOpen}
              setInsightDropdownOpen={setInsightDropdownOpen}
              mockData={mockData}
            />
          </div>
          <div className=" max-h-[572px] rounded-2xl overflow-hidden bg-[#000000] md:col-span-2">
            <DemographicsCard
              demographicType={demographicType}
              setDemographicType={setDemographicType}
              demographicOptions={metricOptions}
              demographicDropdownOpen={demographicDropdownOpen}
              setDemographicDropdownOpen={setDemographicDropdownOpen}
              mockData={mockData}
            />
          </div>
        </div>
      );
    }
    if (activeTab === "Reports") {
      return (
        <div className="flex items-center justify-center   text-white">
          <p>{`${activeTab} coming soon`}</p>
        </div>
      );
    }
    if (activeTab === "Demographics") {
      return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 h-screen md:max-h-[calc(100vh-150px)] md:max-w-[calc(100vw-240px)]  w-screen bg-[#1D1D1D] text-white p-4">
          {" "}
          <div className=" max-h-[572px] md:min-h-full md:min-w-full rounded-2xl overflow-hidden bg-[#000000] ">
            <DemographicsCard
              demographicType={demographicType}
              setDemographicType={setDemographicType}
              demographicOptions={metricOptions}
              demographicDropdownOpen={demographicDropdownOpen}
              setDemographicDropdownOpen={setDemographicDropdownOpen}
              mockData={mockData}
            />
          </div>
        </div>
      );
    }
  };
  return (
    //Visiors card jsx
    <div className="h-full w-full ">
      <div className="hidden md:block">
        <TabsContainer
          activeTab={activeTab}
          setActiveTab={(tab) => dispatch(setActiveTab(tab))}
        />
      </div>

      {getActiveTab()}
    </div>
  );
};

export default MainPage;
