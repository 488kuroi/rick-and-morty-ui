import { FC } from 'react';
import { useStyles as useCommonStyles } from '@pages'
import { Typography } from '@material-ui/core';


interface NotFoundPageProps { }

const NotFoundPage: FC<NotFoundPageProps> = () => {

  const commonClasses = useCommonStyles();

  return (
    <div data-testid="NotFoundPage" className={`Page Page_not-found ${commonClasses.dFlex} ${commonClasses.justCenter} ${commonClasses.alignCenter}`}>
      <Typography variant="h2" style={{ fontWeight: 'bold' }}>
        404
      </Typography>
    </div>
  );
};

export default NotFoundPage;
