import React from "react";
import "../StylesSheet/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";

function Sidebar() {
  return (
    <div className="sidebar">

      <h4 style={{ marginLeft: "15px", color: "gray" }}>Library</h4>
      <SidebarOption Icon={BookmarkBorderIcon} text="My Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="News & Articles" />
      <SidebarOption Icon={NotificationsNoneIcon} text="FAQs" />
      <SidebarOption Icon={HomeIcon} text="Events" />

    </div>
  );
}

export default Sidebar;
