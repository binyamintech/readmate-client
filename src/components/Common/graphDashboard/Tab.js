import React from "react";

export default function Tab({tabName,last,updateDataSource,updateSelectedTab,selectedTab,dataArrayName}) {
  function click() {
   updateDataSource(dataArrayName)
    updateSelectedTab(tabName)
  }
  return (
    <div className={selectedTab===tabName?'TabOn':'Tab'} onClick={click}>
      <div className="InText">{last}</div>
      <div>{tabName}</div>
    </div>
  );
}
