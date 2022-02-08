import React, { lazy, Suspense } from 'react';

const LazyDrawerComponent = lazy(() => import('./DrawerComponent'));

const DrawerComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDrawerComponent {...props} />
  </Suspense>
);

export default DrawerComponent;
