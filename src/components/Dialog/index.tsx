import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';

import { useStyles } from './style';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '../../icons/CloseIcon';

export default function Dialog({
  isOpen,
  title,
  onClose,
  children,
  actions,
}: {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: any;
  actions?: JSX.Element;
}) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={isOpen}>
      {/*<Fade in={true} timeout={1000}>*/}
      <div className={classes.modalWindow}>
        <div className={classes.header}>
          <div className={classes.headerContent}>
            <Typography variant="h5">{title}</Typography>

            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </div>
          <div className={classes.delimiter}></div>
        </div>

        <div className={classes.content}>{children}</div>

        {/* TODO: Когда придет одобрение от Марины, вынести проверку на существования массива кнопок для всего блока footer. 
          В текущем варианте скрывается только полоса разграничения.  */}
        <div className={classes.footer}>
          {actions ? <div className={classes.delimiter}></div> : null}
          <div className={classes.footerContent}>{actions}</div>
        </div>
      </div>
      {/*</Fade>*/}
    </Backdrop>
  );
}
