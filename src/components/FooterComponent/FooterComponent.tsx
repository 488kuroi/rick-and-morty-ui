import React, { FC } from 'react';

import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core';

import { ITheme } from "@src/assets/themes";

import { useStyles as CommonStyles } from '@pages';

import {
  IconButton,
  Typography,
} from "@material-ui/core";

import {
  AccountBoxOutlined,
  AttachEmailOutlined,
} from '@mui/icons-material';

const useStyles = makeStyles((theme: ITheme) => ({
  footer: {
    borderColor: theme.palette.footer.border,
    borderTop: 'solid 1px',
    padding: theme.spacing(3, 3, 2, 3),
  },
  iconButtons: {
    marginLeft: theme.spacing( 3 )
  }
}));


interface FooterComponentProps {}

const FooterComponent: FC<FooterComponentProps> = () => {

  const { t } = useTranslation('common');
  const classes = useStyles();
  const commonClasses = CommonStyles();

  return (
    <div data-testid="FooterComponent" className={`Footer ${commonClasses.dFlex} ${commonClasses.flexRow} ${commonClasses.alignCenter} ${commonClasses.justStart} ${classes.footer}`}>
      <Typography variant="body2">{t('footer.text')}</Typography>
      <IconButton className={`${classes.iconButtons}`} href={t('footer.link')}>
        <AccountBoxOutlined />
      </IconButton>
      <IconButton className={`${classes.iconButtons}`} href={`mailto:${t('footer.email')}`}>
        <AttachEmailOutlined />
      </IconButton>
    </div>
  )
}

export default FooterComponent;
