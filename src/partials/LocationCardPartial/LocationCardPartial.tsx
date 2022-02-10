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
            {t('type')}: {data?.type || ''}
          </Typography>
          <Typography variant="body2">
            {t('dimension')}: {data?.dimension || ''}
          </Typography>
          <Typography variant="body2">
            {t('residents')}: {data?.residents.length || ''}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  )
};

export default LocationCardPratial;
