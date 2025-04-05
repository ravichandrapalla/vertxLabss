// const VisitorsCard = ({
//   metricOptions,
//   metricType,
//   setMetricType,
//   metricDropdownOpen,
//   setMetricDropdownOpen,
//   timeOptions,
//   setTimeRange,
//   timeRange,
//   timeDropdownOpen,
//   setTimeDropdownOpen,
//   setAddDropdownOpen,
//   addDropdownOpen

// }) => {
//   return (
//     <div className="flex gap-6 mb-8">
//       {/* Metrics Chart */}
//       <div className="flex-1 bg-gray-900 rounded-lg p-4">
//         <div className="flex justify-between mb-4">
//           <Dropdown
//             label="Metric Type"
//             options={metricOptions}
//             selected={metricOptions.find((o) => o.value === metricType)?.label}
//             onChange={setMetricType}
//             isOpen={metricDropdownOpen}
//             onToggle={() => setMetricDropdownOpen(!metricDropdownOpen)}
//           />

//           <Dropdown
//             label="Time Range"
//             options={timeOptions}
//             selected={timeOptions.find((o) => o.value === timeRange)?.label}
//             onChange={setTimeRange}
//             isOpen={timeDropdownOpen}
//             onToggle={() => setTimeDropdownOpen(!timeDropdownOpen)}
//           />

//           <div className="relative">
//             <button
//               onClick={() => setAddDropdownOpen(!addDropdownOpen)}
//               className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md"
//             >
//               <Plus size={16} />
//               <span>Add</span>
//             </button>

//             {addDropdownOpen && (
//               <div className="absolute right-0 z-10 mt-1 w-48 bg-gray-800 rounded-md shadow-lg">
//                 <div className="py-1 px-2 text-sm text-gray-400">
//                   Add comparison:
//                 </div>
//                 {addOptions.map((option) => (
//                   <button
//                     key={option.value}
//                     className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
//                     onClick={() => {
//                       handleAddComparison(option.value);
//                       setAddDropdownOpen(false);
//                     }}
//                   >
//                     {option.label}
//                   </button>
//                 ))}
//                 {showComparison && (
//                   <>
//                     <div className="border-t border-gray-700 my-1"></div>
//                     <button
//                       className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700"
//                       onClick={() => {
//                         removeComparison();
//                         setAddDropdownOpen(false);
//                       }}
//                     >
//                       Remove Comparison
//                     </button>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex items-center gap-8 mb-4">
//           <div>
//             <div className="text-4xl font-bold" style={{ color: primaryColor }}>
//               {mockData[metricType].total.toLocaleString()}
//             </div>
//             <div className="text-green-500 text-sm">
//               {mockData[metricType].growth} {mockData[metricType].valueChange}
//             </div>
//           </div>

//           {showComparison && comparisonMetric && (
//             <div>
//               <div
//                 className="text-4xl font-bold"
//                 style={{ color: secondaryColor }}
//               >
//                 {mockData[comparisonMetric].total.toLocaleString()}
//               </div>
//               <div className="text-green-500 text-sm">
//                 {mockData[comparisonMetric].growth}{" "}
//                 {mockData[comparisonMetric].valueChange}
//               </div>
//             </div>
//           )}
//         </div>

//         <MetricsChart
//           data={currentMetricData}
//           comparisonData={showComparison ? currentComparisonData : null}
//           primaryColor={primaryColor}
//           secondaryColor={secondaryColor}
//         />
//       </div>
//     </div>
//   );
// };

// export default VisitorsCard;
