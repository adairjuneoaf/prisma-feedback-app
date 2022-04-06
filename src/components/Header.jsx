// Main Dependencies
import React from "react";
import PropTypes from "prop-types";

export const HeaderComponent = ({ text }) => {
  return (
    <header className="">
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

HeaderComponent.defaultProps = {
  text: "Feedback App",
};

HeaderComponent.propTypes = {
  text: PropTypes.string,
};
