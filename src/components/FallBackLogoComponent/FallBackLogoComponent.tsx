import { makeStyles } from '@material-ui/core';

import Logo from '@images/backgrounds/logo.png';


const useStyles = makeStyles((theme) => ({
    '@keyframes blinker': {
        '0%': { opacity: 0.5 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.5 },
    },
    logoWrapper: {
        position: 'fixed',
        zIndex: 2000,
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba( 0, 0, 0, 0.4 )',
        animationName: '$blinker',
        animationDuration: '3s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        '& img': {
            width: '20vw',
            minWidth: '200px',
            margin: theme.spacing(0, 10)
        }
    }
}));

function FallBackLogoComponent() {

    const classes = useStyles();

    return (

        <div className={`${classes.logoWrapper} d-flex align-items-center justify-content-center flex-column`}>
            <img src={Logo} alt="Fallback logo" />
        </div>

    )

}

export default FallBackLogoComponent