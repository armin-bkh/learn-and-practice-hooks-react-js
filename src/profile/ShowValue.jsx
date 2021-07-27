import React from "react";

const ShowValue = ({ icon, value, label, classes }) => {
  return (
    <span className="getted-value">
      <label className="label">
      <i className="profile-icon">{icon}</i>
      {label}
      </label>
      <span className={classes}>{value}</span>
    </span>
  );
};

export default ShowValue;
