import React, { lazy, Suspense } from 'react';

import { TableComponentProps } from '@core/interfaces';

const LazyTableComponent = lazy(() => import('./TableComponent'));

const TableComponent = (props: TableComponentProps & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTableComponent {...props} />
  </Suspense>
);

export default TableComponent;
