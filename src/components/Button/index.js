import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from '../Loading';
import './index.css';

export const Button = ({
    onClick,
    className,
    children,
  }) => 
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>;

const withLoading = (Component) => ({ isLoading, ...rest }) =>
  isLoading
    ? <Loading />
    : <Component { ...rest } />

export const ButtonWithLoading = withLoading(Button);

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};