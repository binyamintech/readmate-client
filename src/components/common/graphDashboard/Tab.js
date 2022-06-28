import React from "react";

export default function Tab({name,updateDataSource,updateSelectedTab,selectedTab,dataArrayName}) {
  function click() {
   updateDataSource(dataArrayName)
    updateSelectedTab(name)
  }
  return (
    <div className={selectedTab===name?'TabOn':'Tab'} onClick={click}>
      {name}
    </div>
  );
}
