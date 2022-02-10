import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableComponentProps } from '@core/interfaces';

import CharactersRepository from '@repositories/characters';
import { openModal } from '@features/modal/modal.slice';

import { useStyles as commonStyles } from '@pages';
import { TableComponent } from '@components'
import { EpisodeCardPartial, CharactersCardPartial } from '@src/partials';

import {
  IconButton,
  Typography,
} from '@material-ui/core';

import { SearchOutlined, PeopleAlt } from '@mui/icons-material';
import { EpisodesRepository } from '@src/core/repositories';


interface EpisodesPageProps { }

const EpisodesPage: FC<EpisodesPageProps> = () => {

  
  const { t } = useTranslation('common');
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  const headings = [
    { id: 'name', numeric: false, label: t('name'), style: { width: '25%' } },
    { id: 'episode', numeric: false, label: t('episode'), style: { width: '25%' } },
    { id: 'air_date', numeric: false, label: t('air_date'), style: { width: '25%' } },
    { id: 'actions', numeric: false, label: t('actions'), style: { width: '25%' } },
  ];

  async function openEpisodesModal(id: number) {
    const locationResult = await EpisodesRepository.getEpisodesByIds([id]).catch((err: any) => false);
    if (locationResult) {
      dispatch(openModal({
        closeButton: true,
        ...(t('modals.single_episode', { returnObjects: true }) as any),
        type: 'single_card_modal',
        data: <EpisodeCardPartial data={locationResult} />,
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


        const charactersCount = row.characters.length;
        const charactersLink = row.characters.map((character: string) => parseInt(character.match(/\d+$/)[0], 10));

        return {
          ...row,
          actions: <div className={commonClasses.tableActions}>
            <IconButton color="primary" onClick={() => openEpisodesModal(row.id)}>
              <SearchOutlined />
            </IconButton>
            <>
              <Typography>
                {charactersCount > 0 ? t('charactersCount', {charactersCount}) : t('no_residents')}
              </Typography>
              {
                charactersCount > 0 &&
                <IconButton color="secondary" onClick={() => openCharactersModal( charactersLink )}>
                  <PeopleAlt />
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

    <div data-testid="EpisodesPage" className={`Page Page_episodes`}>
      <TableComponent {...{
        repository: 'EpisodesRepository',
        action: 'getEpisodesByPage',
        headings,
        formatter: tableFormatter,
      } as TableComponentProps}
      />
    </div>
  )



};

export default EpisodesPage;
