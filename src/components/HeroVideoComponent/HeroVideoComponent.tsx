import { FC } from 'react';

import { makeStyles } from '@material-ui/core';

import HeroVideo from '@videos/hero-video.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxHeight: '85vh',
    overflowY: 'hidden'
  },
  video: {
    width: '100%',
  },
}));


interface HeroVideoComponentProps { }

const HeroVideoComponent: FC<HeroVideoComponentProps> = () => {

  const classes = useStyles();

  return (
    <div data-testid="HeroVideoComponent" className={`hero-header ${classes.root}`}>
      <video className={`${classes.video}`} muted={true} controls={false} autoPlay={true} loop={true}>
        <source src={HeroVideo} type={`video/mp4`} />
        Your browser does not support the video tag.
      </video>
    </div>
  )


};

export default HeroVideoComponent;
