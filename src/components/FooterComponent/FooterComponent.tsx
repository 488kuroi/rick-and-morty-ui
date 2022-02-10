import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { selectLanguage } from '@selectors';
import { setLanguage } from '@features/language/language.slice';

import { ITheme } from "@src/assets/themes";

import { useStyles as CommonStyles } from '@pages';

import {
  makeStyles,
  IconButton,
  Typography,
  Button,
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
    marginLeft: theme.spacing(3)
  }
}));


interface FooterComponentProps { }

const FooterComponent: FC<FooterComponentProps> = () => {

  const LANGUAGE = useSelector(selectLanguage)
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const classes = useStyles();
  const commonClasses = CommonStyles();

  return (
    <div data-testid="FooterComponent" className={`Footer ${commonClasses.dFlex} ${commonClasses.flexRow} ${commonClasses.alignCenter} ${commonClasses.justBetween} ${classes.footer}`}>
      <div className={`${commonClasses.dFlex} ${commonClasses.flexRow} ${commonClasses.alignCenter} ${commonClasses.justStart}`}>
        <Typography variant="body2">{t('footer.text')}</Typography>
        <IconButton className={`${classes.iconButtons}`} href={t('footer.link')} target="_blank">
          <AccountBoxOutlined />
        </IconButton>
        <IconButton className={`${classes.iconButtons}`} href={`mailto:${t('footer.email')}`}>
          <AttachEmailOutlined />
        </IconButton>
      </div>
      <div>
        <Button variant="text" onClick={() => dispatch(setLanguage('en'))} disabled={ LANGUAGE.language === 'en' || LANGUAGE.language === undefined  }>EN</Button>
        <Button variant="text" onClick={() => dispatch(setLanguage('it'))} disabled={ LANGUAGE.language === 'it'  }>IT</Button>
      </div>
    </div>
  )
}

export default FooterComponent;
