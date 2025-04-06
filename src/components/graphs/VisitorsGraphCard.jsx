import React from "react";
import { LineChart, Line, XAxis, ResponsiveContainer, YAxis } from "recharts";
import { Plus } from "lucide-react";
import Dropdown from "../ui/Dropdown";

const VisiorsGraphCard = ({
  metricType,
  timeRange,
  metricOptions,
  timeOptions,
  addOptions,
  showComparison,
  comparisonMetric,
  currentMetricData,
  currentComparisonData,
  mockData,
  primaryColor,
  secondaryColor,
  metricDropdownOpen,
  setMetricDropdownOpen,
  timeDropdownOpen,
  setTimeDropdownOpen,
  addDropdownOpen,
  setAddDropdownOpen,
  handleAddComparison,
  removeComparison,
  setMetricType,
  setTimeRange,
}) => {
  return (
    <div className="flex-1 rounded-lg p-4">
      {/* Dropdowns */}
      <div className="flex mb-4">
        <Dropdown
          label="Metric Type"
          options={metricOptions}
          selected={metricOptions.find((o) => o.value === metricType)?.label}
          onChange={setMetricType}
          isOpen={metricDropdownOpen}
          onToggle={() => setMetricDropdownOpen(!metricDropdownOpen)}
        />

        <Dropdown
          label="Time Range"
          options={timeOptions}
          selected={timeOptions.find((o) => o.value === timeRange)?.label}
          onChange={setTimeRange}
          isOpen={timeDropdownOpen}
          onToggle={() => setTimeDropdownOpen(!timeDropdownOpen)}
        />

        <div className="relative">
          <button
            onClick={() => setAddDropdownOpen(!addDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[#080808] border-[#1D1D1D] text-white text-xs rounded-2xl"
          >
            <Plus size={16} />
            <span>Add</span>
          </button>

          {addDropdownOpen && (
            <div className="absolute right-0 z-10 mt-1 w-48 bg-[#1D1D1D] rounded-md shadow-lg">
              <div className="py-1 px-2 text-sm text-gray-400">
                Add comparison:
              </div>
              {addOptions.map((option) => (
                <button
                  key={option.value}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => {
                    handleAddComparison(option.value);
                    setAddDropdownOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
              {showComparison && (
                <>
                  <div className="border-t border-gray-700 my-1"></div>
                  <button
                    className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700"
                    onClick={() => {
                      removeComparison();
                      setAddDropdownOpen(false);
                    }}
                  >
                    Remove Comparison
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Total and Comparison Metrics */}
      <div className="flex items-center gap-8 mb-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold" style={{ color: primaryColor }}>
            {mockData[metricType].total.toLocaleString()}
          </div>
          <div className="flex flex-col items-center text-green-500 text-xs ml-2">
            <span>{mockData[metricType].growth}</span>
            <span className="text-[#555555]">
              {mockData[metricType].valueChange}
            </span>
          </div>
        </div>

        {showComparison && comparisonMetric && (
          <div>
            <div
              className="text-4xl font-bold"
              style={{ color: secondaryColor }}
            >
              {mockData[comparisonMetric].total.toLocaleString()}
            </div>
            <div className="text-green-500 text-sm">
              {mockData[comparisonMetric].growth}{" "}
              {mockData[comparisonMetric].valueChange}
            </div>
          </div>
        )}
      </div>

      {/* Line Chart */}
      <div className="mb-2">
        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            data={currentMetricData}
            margin={{ top: 10, right: 10, bottom: 10, left: -25 }}
          >
            <XAxis
              dataKey="date"
              stroke="#888"
              tick={{ fontSize: 10, fill: "#aaa" }}
              axisLine={{ stroke: "#333" }}
              tickLine={false}
              interval={0}
            />
            <YAxis
              stroke="#888"
              tick={{ fontSize: 10, fill: "#aaa" }}
              axisLine={false}
              tickLine={false}
              tickCount={Math.ceil(5)} // Optional if you want control
              domain={[0, "auto"]}
              interval="preserveStartEnd"
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={primaryColor}
              strokeWidth={2}
              dot={false}
            />
            {showComparison && (
              <Line
                type="monotone"
                dataKey="value"
                data={currentComparisonData}
                stroke={secondaryColor}
                strokeWidth={2}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisiorsGraphCard;
