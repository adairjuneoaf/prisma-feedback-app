// Main Dependencies
import React, { Fragment } from "react";
import propTypes from "prop-types";

export const ButtonComponent = ({ children, type, version, isDisabled }) => {
  return (
    <Fragment>
      <button
        type={type}
        className={`btn btn-${version}`}
        disabled={isDisabled}
      >
        {children}
      </button>
    </Fragment>
  );
};

ButtonComponent.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};

ButtonComponent.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string,
  version: propTypes.string,
  isDisabled: propTypes.bool,
};
