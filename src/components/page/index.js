import React, { memo } from 'react';

/**
 * 页面包裹
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
const Page = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export default memo(Page);
