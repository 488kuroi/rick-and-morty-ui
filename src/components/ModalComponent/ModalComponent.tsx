import React, { FC } from 'react';

import { MODAL } from '@models';
import { Typography, Modal } from '@material-ui/core';
import { HighlightOff } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from '@selectors'
import { closeModal } from '@store/features/modal/modal.slice';

import parse from 'html-react-parser';

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
      width: 'calc( 100% + 50px )',
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
    border_neutral: {
      borderColor: theme.palette.primary.main,
    },
    border_success: {
      borderColor: theme.palette.secondary.main,
    },
    border_warning: {
      borderColor: (theme.palette.common as any).kem_yellow,
    },
    border_error: {
      borderColor: theme.palette.error.main,
    },
    content: {
      '& .delete_people_list': {
        listStyle: 'none',
        padding: theme.spacing(2, 0, 0),
      }
    }
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
            <div className={modalData.hasOwnProperty('subTitle') ? 'mb-2' : 'mb-4'}>
              <Typography variant="h4">
                {parse(modalData.title)}
              </Typography>
            </div>
          }

          {
            modalData?.subTitle &&
            <div className="mb-4">
              <Typography variant="h5">
                {parse(modalData.subTitle)}
              </Typography>
            </div>
          }

          <hr className="mb-4" />

          {
            modalData?.text &&
            <div className={`${classes.content}`}>
              <Typography variant="body1">
                {parse(modalData.text)}
              </Typography>
            </div>
          }


        </div>

      </div>
    </Modal>
  )


};

export default ModalComponent;
