import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MODAL } from '@models';
import { selectModal } from '@selectors'
import { closeModal } from '@store/features/modal/modal.slice';

import parse from 'html-react-parser';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import {
  Typography,
  Modal,
} from '@material-ui/core';

import { HighlightOff } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@keyframes fadeIn': {
      '0%': { opacity: 0, marginTop: -300 },
      '100%': { opacity: 1, marginTop: 0 },
    },
    root: {
      transform: 'translateZ(0)',
    },
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '80vw',
      margin: '0 auto',
    },
    paper: {
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4, 0),
      minWidth: '30vw',
      animationName: '$fadeIn',
      animationDuration: '0.7s',
      animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      animationIterationCount: 1,
      overflow: 'hidden',
      color: theme.palette.text.primary
    },
    wrapper: {
      position: 'relative',
      height: '100%',
      width: 'calc( 100% + 25px )',
      overflowY: 'scroll',
      overflowX: 'hidden',
      maxHeight: '80vh',
      paddingRight: '25px',
      paddingBottom: theme.spacing(5),
    },
    closeButton: {
      position: 'absolute',
      right: 25,
      top: 0,
      cursor: 'pointer',
      transition: 'all 0.15s ease-in-out',
      '&:hover': {
        opacity: 0.7
      }
    },
    subtitle: {
      marginTop: theme.spacing( 1.5 ),
    },
    content: {
      '& .delete_people_list': {
        listStyle: 'none',
        padding: theme.spacing(2, 0, 0),
      }
    },
    single_card_modal: {
      paddingTop: theme.spacing(1.5),
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
    },
    card_modal: {
      '& > div': {
        width: '30%',
        marginBottom: theme.spacing( 5 ),
      }
    },
    border_neutral: {
      borderColor: theme.palette.primary.main,
    },
    border_success: {
      borderColor: theme.palette.secondary.main,
    },
    border_warning: {
      borderColor: theme.palette.error.light,
    },
    border_error: {
      borderColor: theme.palette.error.main,
    },
    
  }),
);


interface ModalComponentProps { }

const ModalComponent: FC<ModalComponentProps> = () => {

  const dispatch = useDispatch();
  const classes = useStyles();
  const modalData: MODAL.Modal = useSelector(selectModal);
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <Modal
      data-testid="ModalComponent"
      open={modalData.isOpen}
      onClose={() => dispatch(closeModal)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
      container={() => rootRef.current}
    >
      <div className={`${classes.paper} ${modalData.modalStatus ? (classes as any)[`border_${modalData.modalStatus}`] : classes.border_neutral}`}>

        <div className={`${classes.wrapper}`}>

          {
            modalData?.closeButton &&
            <div className={`${classes.closeButton}`}>
              <HighlightOff onClick={() => dispatch(closeModal())} />
            </div>
          }

          {
            modalData?.title &&
            <div>
              <Typography variant="h4">
                {parse(modalData.title)}
              </Typography>
            </div>
          }

          {
            modalData?.subTitle &&
            <div className={classes.subtitle}>
              <Typography variant="h5">
                {parse(modalData.subTitle)}
              </Typography>
            </div>
          }

          <hr />

          {
            modalData?.text &&
            <div className={`${classes.content}`}>
              <Typography variant="body1">
                {parse(modalData.text)}
              </Typography>
            </div>
          }

          {
            ((modalData?.type === 'card_modal' || modalData?.type === 'single_card_modal') && modalData?.data) &&
            <div className={`${classes.single_card_modal} ${modalData?.type === 'card_modal' ? classes.card_modal : {} }`}>
              {modalData?.data}
            </div>
          }


        </div>

      </div>
    </Modal>
  )


};

export default ModalComponent;
