import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CardPartialProps } from '@core/interfaces';

import { useStyles as useCommonStyles } from '@pages';

import {
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

import {
  CircleSharp,
  Female,
  Male,
  Transgender,
} from '@mui/icons-material'

import placeholder from '@images/character_placeholder.jpg';

const CharactersCardPartial: FC<CardPartialProps> = ({ data = null }) => {

  const { t } = useTranslation('common');
  const commonClasses = useCommonStyles()

  return (
    <div data-testid="CharactersCardPartial">
      <Card>
        <CardMedia
          component="img"
          height="194"
          image={ data?.image || placeholder }
          alt={data?.name || ''}
        />
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {t('id')}: {data?.id || ''}
          </Typography>
            <Typography gutterBottom variant="h5" component="div" className={`${commonClasses.dFlex} ${commonClasses.alignCenter} ${commonClasses.flexRow}`}>
              {t('name')}: {data?.name || ''} <CircleSharp style={{ marginLeft: 10 }} color={ data?.status === 'Alive' ? 'success' : data?.status === 'Dead' ? 'error' : 'warning' } />
          </Typography>
          <Typography variant="body2" className={`${commonClasses.dFlex} ${commonClasses.alignCenter} ${commonClasses.flexRow}`}>
              {t('origin')}: {data?.origin?.name || ''} - {t('species')}: {data?.species || ''} {data?.type || ''} <span style={{ marginLeft: 10 }}>{ data?.gender === 'Female' ? <Female color="primary"/> : data?.gender === 'Male' ? <Male color="secondary"/> : <Transgender color="warning"/> }</span>
          </Typography>
          <Typography variant="body2">
            {t('dimension')}: {data?.dimension || ''} - {t('location')}: {data?.location?.name || ''}
          </Typography>
          <Typography variant="body2">
            {t('episodes_presence')}: {data?.episode?.length || 0}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  )
};

export default CharactersCardPartial;
