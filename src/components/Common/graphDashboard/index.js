import React, { useState } from "react";
import Days from "./Days";
import fakeData from "./fakeData";
import Graph from "./Graph";
// import SelectPeriod from "./SelectPeriod";
import "./Style.css";
import Tab from "./Tab";

export default function GraphContainer() {
  // const [period, setPeriod] = useState(fakeData.lastWeek);
  const [dataSrc, setDataSrc] = useState(fakeData.dataSrcInit);
  const [selectedTab, setSelectedTab] = useState("Assesments");
  const tabs = [
    {
      name: "Assesments",
      count: `${fakeData.assesmentsData.count} WPM`,
      dataArrayName: "assesmentsData",
    },
    {
      name: "Reading",
      count: `${fakeData.readingData.count} LPM`,
      dataArrayName: "readingData",
    },
    {
      name: "Focus",
      count: `${fakeData.focusData.count} CM`,
      dataArrayName: "focusData",
    },
    
  ];
 
  return (
    <>
    <div className="Border">
          </div>
      <div className="DashGraph">
        <div className="Tabs">
          {tabs.map((tab) => {
            return <Tab
            name={tab.name}
            count={tab.count}
            dataArrayName={tab.dataArrayName}
            selectedTab={selectedTab}
            updateSelectedTab={(tabName) => {
              setSelectedTab(tabName);
            }}
            updateDataSource={(data) => {
              setDataSrc(fakeData[data]);
            }}
            />;
          })}
        </div>
          <Days />
        <div className="Graph">
          <Graph d={dataSrc} labs={Days}/>
        </div>
      </div>
    </>
  );
}
