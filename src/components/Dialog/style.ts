import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  backdrop: {
    zIndex: 12,
  },
  modalWindow: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    border: '1px solid #D8D8D8',
    boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.25)',
    borderRadius: '4px',
    width: '650px',
    minHeight: '200px',
    maxHeight: '80%',
    padding: '0 12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  delimiter: {
    height: '1px',
    backgroundColor: '#DCDFE6',
  },
  header: {},
  headerContent: {
    minHeight: '58px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '25px',
  },
  content: {
    margin: '33px 0 31px',
    overflowY: 'auto',
    // height: 'calc(50vh - 118px - 64px)',
    height: '100%',
  },
  footer: {
    minHeight: '59px',
  },
  footerContent: {
    minHeight: '59px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));
