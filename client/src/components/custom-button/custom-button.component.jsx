import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

// import { CustomButtonContainer } from './custom-button.styles';

// const CustomButton = ({ children, ...props }) => {
//   return (
//     <CustomButtonContainer {...props}> {children} </CustomButtonContainer>
//   )
// };

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  )
};

export default CustomButton;