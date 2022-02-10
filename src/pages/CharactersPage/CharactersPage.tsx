import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableComponentProps } from '@core/interfaces';

import EpisodesRepository from '@repositories/episodes';
import CharactersRepository from '@repositories/characters';
import { openModal } from '@features/modal/modal.slice';

import { useStyles as commonStyles } from '@pages';
import { TableComponent } from '@components'
import { EpisodeCardPartial, CharactersCardPartial } from '@src/partials';

import {
  IconButton,
  Typography,
} from '@material-ui/core';

import { SearchOutlined, TheaterComedyOutlined } from '@mui/icons-material';

interface CharactersPageProps { }

const CharactersPage: FC<CharactersPageProps> = () => {

  const { t } = useTranslation('common');
  const commonClasses = commonStyles();
  const dispatch = useDispatch();

  const headings = [
    { id: 'name', numeric: false, label: t('name'), style: { width: '15%' } },
    { id: 'places', numeric: false, label: t('location_before_and_after'), style: { width: '20%' } },
    { id: 'physical_details', numeric: false, label: t('physical_details'), style: { width: '15%' } },
    { id: 'gender', numeric: false, label: t('gender'), style: { width: '5%' } },
    { id: 'type', numeric: false, label: t('type'), style: { width: '15%' } },
    { id: 'status', numeric: false, label: t('status'), style: { width: '5%' } },
    { id: 'actions', numeric: false, label: t('actions'), style: { width: '20%' } },
  ];

  async function openEpisodesModal(ids: Array<number>) {
    const episodesResult = await EpisodesRepository.getEpisodesByIds(ids).catch((err: any) => false);
    if (episodesResult) {
      const resultLenght = Array.isArray(episodesResult) ? 2 : 1;
      dispatch(openModal({
        closeButton: true,
        ...(t('modals.multiple_episodes', { returnObjects: true }) as any),
        type: resultLenght === 2 ? 'card_modal' : 'single_card_modal',
        data: resultLenght === 2
        ? episodesResult.map((episode: any, episode_i: number) => <EpisodeCardPartial key={`episode_${episode_i}`} data={episode} />)
        : <EpisodeCardPartial data={episodesResult} />
      }))
    }
  }

  async function openCharactersModal(id: number) {
    const charactersResult = await CharactersRepository.getCharactersByIds([id]).catch((err: any) => false);

    if (charactersResult) {
      dispatch(openModal({
        closeButton: true,
        ...(t('modals.single_character', { returnObjects: true }) as any),
        type: 'single_card_modal',
        data: <CharactersCardPartial data={charactersResult} />
      }))
    }
  }

  function tableFormatter(_data: Array<any>) {
    if (_data.length === 0) { return [] }
    try {
      return _data.map((row: any) => {
        const episodesCount = row.episode.length;
        const episodesLink = row.episode.map((episode: string) => parseInt(episode.match(/\d+$/)[0], 10));
        return {
          ...row,
          places: `${row?.origin?.name || ''}/${row?.location?.name || ''}`,
          physical_details: ` ${row?.species || ''}/${row?.type || ''} `,
          actions: <div className={commonClasses.tableActions}>
            <IconButton color="primary" onClick={() => openCharactersModal(row.id)}>
              <SearchOutlined />
            </IconButton>
            <>
              <Typography>
                {episodesCount > 0 ? t('episodesCount', { episodesCount }) : t('no_episodes')}
              </Typography>
              {
                episodesCount > 0 &&
                <IconButton color="secondary" onClick={() => openEpisodesModal(episodesLink)}>
                  <TheaterComedyOutlined />
                </IconButton>
              }
            </>
          </div>
        }

      });
    } catch (err: any) {
      console.warn(`Characters page ${err}`);
      return [];
    }

  }


  return (
    <div data-testid="CharactersPage" className={`Page Page_characters`}>
      <TableComponent {...{
        repository: 'CharactersRepository',
        action: 'getCharactersByPage',
        headings,
        formatter: tableFormatter,
      } as TableComponentProps}
      />
    </div>
  )
};

export default CharactersPage;
