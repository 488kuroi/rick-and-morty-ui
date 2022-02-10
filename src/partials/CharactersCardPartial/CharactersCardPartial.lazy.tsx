import React, { lazy, Suspense } from 'react';

import { CardPartialProps } from '@core/interfaces'

const LazyLocationCardPartial = lazy(() => import('./CharactersCardPartial'));

const CharactersCardPartial = (props: CardPartialProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLocationCardPartial {...props} />
  </Suspense>
);

export default CharactersCardPartial;
