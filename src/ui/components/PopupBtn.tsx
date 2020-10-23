import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';
import BugReportIcon            from '@material-ui/icons/BugReport';
import ModalContent             from './ModalContent';
import Modal                    from '@material-ui/core/Modal';
import Backdrop                 from '@material-ui/core/Backdrop';
import Fade                     from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:               1, 
    },   
    navBtn:{
        color:                  '#fff',
        background:             'transparent',
        border:                 'none',       
        float:                  'left',    
        fontSize:               '15px',
        borderRadius:           '3px',
        fontFamily:             'Roboto',
        padding:                '10px 10px',
        textDecoration:         'none',
            '&:focus':{
                border:         '0',
                outline:        '0'
            }     
    },
    matIcon:{
        float:                  'left',
        fontSize:               '20px',
        marginRight:            '3px'
    },
    modal: {
        display:                'flex',
        alignItems:             'center',
        justifyContent:         'center',
      },
    paper: {
        backgroundColor:        theme.palette.background.paper,
        border:                 '2px solid #000',
        boxShadow:              theme.shadows[5],
        padding:                theme.spacing(2, 4, 3),
        position:               'relative'
    },
    cancelBtn:{
        position:               'absolute',
        right:                  '-16px',
        top:                    '-16px',
        borderRadius:           '50%',
        border:                 'none',
        background:             '#0c3451',
        color:                  '#fff',
        padding:                '10px',
        height:                 '30px',
        width:                  '30px',
        lineHeight:             '11px',
        cursor:                 'pointer',
            '&:focus':{
                outline:        '0',
                border:         '0'
            }
    },    
 }));
 

function PopupBtn(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };
   return(
       <div>
         <button className={classes.navBtn} onClick={handleOpen}><BugReportIcon className={classes.matIcon}/> Report issue</button>                    
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <button className={classes.cancelBtn} onClick={handleClose}>X</button> 
                     <ModalContent/>
                </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default PopupBtn;