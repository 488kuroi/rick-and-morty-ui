import React, { lazy, Suspense } from 'react';

import { CardPartialProps } from '@core/interfaces'

const LazyLocationCardPratial = lazy(() => import('./EpisodeCardPartial'));

const LocationCardPratial = (props: CardPartialProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLocationCardPratial {...props} />
  </Suspense>
);

export default LocationCardPratial;
