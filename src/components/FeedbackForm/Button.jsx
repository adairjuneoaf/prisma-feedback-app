// Main Dependencies
import React, { Fragment } from "react";
import propTypes from "prop-types";

export const Button = ({ children, type, version, isDisabled }) => {
  return (
    <Fragment>
      <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
      </button>
    </Fragment>
  );
};

// Default Values of Properties
Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};

// Typings Properties
Button.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  version: propTypes.string,
  isDisabled: propTypes.bool,
};
