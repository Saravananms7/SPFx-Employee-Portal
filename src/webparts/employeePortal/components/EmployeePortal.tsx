import * as React from 'react';
import Hero from './Hero/Hero';
import type { IEmployeePortalProps } from './IEmployeePortalProps';
import FeaturedResources from './FeaturedResources/FeaturedResources';

const EmployeePortal: React.FC<IEmployeePortalProps> = (props) => {
  return (
    <>
      <Hero userName={props.userDisplayName} />
      <FeaturedResources/>
    </>

  );
};

export default EmployeePortal;
