import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ variant = "none", children, onClick }) => {
  return (
    <button className={`button button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
