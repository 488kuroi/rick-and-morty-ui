import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CardPartialProps } from '@core/interfaces';

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
} from '@material-ui/core';

const LocationCardPratial: FC<CardPartialProps> = ({ data = null }) => {

  const { t } = useTranslation('common');

  return (
    <div data-testid="LocationCardPratial">
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {t('id')}: {data?.id || ''}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {t('name')}: {data?.name || ''}
          </Typography>
          <Typography variant="body2">
            {t('episode')}: {data?.episode || ''} - {t('air_date')}: {data?.air_date || ''}
          </Typography>
          <Typography variant="body2">
            {t('characters_involved_num')}: {data?.characters.length || ''}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  )
};

export default LocationCardPratial;
