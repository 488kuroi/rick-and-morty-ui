import { FC } from 'react';

import { TableComponentProps } from '@core/interfaces';

import LocationsRepository from '@repositories/locations';

import {
  TableComponent
} from '@components'

interface LocationsPageProps {}

const LocationsPage: FC<LocationsPageProps> = () => (
  <div data-testid="LocationsPage" className={`Page Page_locations`}>
    <TableComponent {...{
      columns: [],
      data: [],
      apiFunction: LocationsRepository['getLocationsByPage']
    } as TableComponentProps }
    />
  </div>
);

export default LocationsPage;
