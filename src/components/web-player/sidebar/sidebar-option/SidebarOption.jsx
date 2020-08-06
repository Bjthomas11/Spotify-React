import React from "react";

import "./sidebar-option.scss";

const SidebarOption = ({ title, Icon }) => {
  return (
    <div className="sidebar-option-container">
      {Icon && <Icon className="option-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOption;
