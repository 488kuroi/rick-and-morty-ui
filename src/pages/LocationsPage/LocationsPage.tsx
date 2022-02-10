import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableComponentProps, CardPartialProps } from '@core/interfaces';

import LocationsRepository from '@repositories/locations';
import CharactersRepository from '@repositories/characters';
import { openModal } from '@features/modal/modal.slice';

import { useStyles as commonStyles } from '@pages';
import { TableComponent } from '@components'
import { LocationsCardPartial, CharactersCardPartial } from '@src/partials';

import {
  IconButton,
  Typography,
} from '@material-ui/core';

import { SearchOutlined, TheaterComedyOutlined } from '@mui/icons-material';

interface LocationsPageProps { }

const LocationsPage: FC<LocationsPageProps> = () => {

  const { t } = useTranslation('common');
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  const headings = [
    { id: 'name', numeric: false, label: t('name'), style: { width: '25%' } },
    { id: 'dimension', numeric: false, label: t('dimension'), style: { width: '25%' } },
    { id: 'type', numeric: false, label: t('type'), style: { width: '25%' } },
    { id: 'actions', numeric: false, label: t('actions'), style: { width: '25%' } },
  ];

  async function openLocationsModal(id: number) {
    const locationResult = await LocationsRepository.getLocationsByIds([id]).catch((err: any) => false);
    if (locationResult) {
      dispatch(openModal({
        closeButton: true,
        ...(t('modals.single_location', { returnObjects: true }) as any),
        type: 'single_card_modal',
        data: <LocationsCardPartial data={locationResult} />,
      }))
    }
  }

  async function openCharactersModal(ids: number) {
    const charactersResult = await CharactersRepository.getCharactersByIds(ids).catch((err: any) => false);
    if (charactersResult) {
      const resultLenght = Array.isArray(charactersResult) ? 2 : 1;
      dispatch(openModal({
        closeButton: true,
        ...(t('modals.multiple_characters', { returnObjects: true }) as any),
        type: resultLenght === 2 ? 'card_modal' : 'single_card_modal',
        data: resultLenght === 2
          ? charactersResult.map((character: any, character_i: number) => <CharactersCardPartial key={`character_${character_i}`} data={character} />)
          : <CharactersCardPartial data={charactersResult} />
      }))
    }
  }

  function tableFormatter(_data: Array<any>) {

    if (_data.length === 0) { return [] }
    try {
      return _data.map((row: any) => {


        const residentsCount = row.residents.length;
        const residentsLink = row.residents.map((resident: string) => parseInt(resident.match(/\d+$/)[0], 10));

        return {
          ...row,
          actions: <div className={commonClasses.tableActions}>
            <IconButton color="primary" onClick={() => openLocationsModal(row.id)}>
              <SearchOutlined />
            </IconButton>
            <>
              <Typography>
                {residentsCount > 0 ? t('residentsCount', {residentsCount}) : t('no_residents')}
              </Typography>
              {
                residentsCount > 0 &&
                <IconButton color="secondary" onClick={() => openCharactersModal( residentsLink )}>
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
