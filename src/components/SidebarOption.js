import React from "react";
import "../StylesSheet/Sidebar.css";

function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {Icon&&<Icon />}
      <h4  style={{ color: 'gray'}}>{text}</h4>
    </div>
  );
}

export default SidebarOption;
