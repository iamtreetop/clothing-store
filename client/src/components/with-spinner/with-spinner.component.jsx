import React from 'react';

// import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

import Spinner from '../spinner/spinner.component'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps}) => {
  return isLoading ? (<Spinner />) : (<WrappedComponent {...otherProps} />);
};

export default WithSpinner;