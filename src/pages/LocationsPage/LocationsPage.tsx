import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TableComponentProps } from '@core/interfaces';

import { useStyles as commonStyles } from '@pages';
import { TableComponent } from '@components'

import { IconButton, Typography } from '@material-ui/core';
import { SearchOutlined, TheaterComedyOutlined } from '@mui/icons-material';

interface LocationsPageProps { }

const LocationsPage: FC<LocationsPageProps> = () => {

  const { t } = useTranslation('common');
  const commonClasses = commonStyles();

  const headings = [
    { id: 'name', numeric: false, label: t('tables.name'), style: { width: '25%' }},
    { id: 'dimension', numeric: false, label: t('tables.dimension'), style: { width: '25%' }},
    { id: 'type', numeric: false, label: t('tables.type'), style: { width: '25%' }},
    { id: 'actions', numeric: false, label: t('tables.actions'), style: { width: '25%' }},
  ];

  function tableFormatter(_data: Array<any>) {

    if (_data.length === 0) { return [] }
    try {
      return _data.map((row: any) => {


        const residentsCount = row.residents.length;
        const residentsLink = row.residents.map((resident: string) => parseInt(resident.match(/\d+$/)[0], 10));

        return {
          ...row,
          actions: <div className={commonClasses.tableActions}>
            <IconButton color="primary" onClick={() => console.log('click')}>
              <SearchOutlined />
            </IconButton>
            <>
              <Typography>
                { residentsCount > 0 ? `Show ${residentsCount}` : 'no residents'},
              </Typography>
              {
                residentsCount > 0 &&
                <IconButton color="secondary" onClick={() => console.log(`click ${residentsLink}`)}>
                  <TheaterComedyOutlined />
                </IconButton>
              }
            </>
          </div>
        }

      });
    } catch (err: any) {
      console.warn(`Locations page ${err}`);
      return [];
    }

  }

  return (
    <div data-testid="LocationsPage" className={`Page Page_locations`}>
      <TableComponent {...{
        repository: 'LocationsRepository',
        action: 'getLocationsByPage',
        headings,
        formatter: tableFormatter,
      } as TableComponentProps}
      />
    </div>
  )
};

export default LocationsPage;
