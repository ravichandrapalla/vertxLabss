import React from "react";
import VisitorsCard from "./graphs/VisitorsGraphCard";
import InsightsCard from "./graphs/InsightsCard";
import DemographicsCard from "./graphs/DemographicsCard";

const OverView = () => {
  return (
    <>
      <VisitorsCard />
      <InsightsCard />
      {/* <DemographicsCard /> */}
    </>
  );
};

export default OverView;
