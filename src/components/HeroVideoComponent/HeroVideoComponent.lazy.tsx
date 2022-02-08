import React, { lazy, Suspense } from 'react';

const LazyHeroVideoComponent = lazy(() => import('./HeroVideoComponent'));

const HeroVideoComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHeroVideoComponent {...props} />
  </Suspense>
);

export default HeroVideoComponent;
