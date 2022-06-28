import React from "react";

export default function Tab({name,count,updateDataSource,updateSelectedTab,selectedTab,dataArrayName}) {
  function click() {
   updateDataSource(dataArrayName)
    updateSelectedTab(name)
  }
  return (
    <div className={selectedTab===name?'TabOn':'Tab'} onClick={click}>
      <div className="InText">{count}</div>
      <div>{name}</div>
    </div>
  );
}
