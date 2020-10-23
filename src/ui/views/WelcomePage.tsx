import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import logo                     from '../assets/images/GWWelcomeLogo.jpg'
import ReleaseNote              from './ReleaseNote'
import { Link}                  from 'react-router-dom'
import                          '../assets/style/style.css'
import * as Utils               from '../utils/utils'
import Footer                   from '../components/Footer';


const { ipcRenderer } = require('electron');

const useStyles = makeStyles((theme) => ({
    root:       {
        flexGrow:       1, 
    },
    fullWidth:{
        maxWidth:       '100%',
        paddingBottom:   '50px'
    },
    container:  {
        display:        'grid',
        gridGap:        theme.spacing(2),
        fontFamily:     'Nunito Sans'
    },
   gridItemRight:{
       borderLeft:      '1px solid #ccc',
       padding:         '15px!important',
       boxShadow:       '-4px 3px 11px #ccc'
   },
   gridItemLeft:{
        textAlign:       'center',
        padding:         '50px 15px 15px 15px!important'
   },
   welcomeTxt:{
        color:           '#0c3350',
        fontFamily:      'Nunito Sans'
   },
   heading:{
        color:           '#0c3350',
        fontFamily:      'Nunito Sans'       
   },
   logo:{
      
   },
   logoImg:{
        width:            '280px'
   },
   version:{
        color:           '#575757'
   },
   abtContent:{
        color:           '#575757',
        lineHeight:      '24px',
        fontSize:        '15px',
        padding:         '0 20px',
        marginBottom:    '30px'
   },
   btnGroup:{        
        width:           '35%',
        margin:          '0px auto',
        fontFamily:      'Nunito Sans'
   },
   getStartBtn:{
        minWidth:        '212px',
        background:      '#47848f',
        color:           '#fff',
        border:          'none',
        padding:         '10px 20px',
        borderRadius:    '3px',
        cursor:          'pointer',
        display:         'inline-block',
        textDecoration:  'none',
        margin:          '20px 0'
   },   
   termsCondition:{
        fontFamily:      'Nunito Sans',
        fontSize:        '14px',
        float:           'left',
        width:           '100%',
        textAlign:       'center',
        marginTop:       '30px'
   },
   colorGreen:{
        color:           '#47848f',
        textDecoration:  'none'
   }
 }));
 

function WelcomePage(){
    const classes = useStyles(); 
    const [version, setVersion] = React.useState("0.1.0")
    
    const getVersion = () =>{   
        ipcRenderer.send('app_version');
        console.log("Added version element");
        ipcRenderer.on('app_version', (event:any, arg:any) => {
            setVersion(arg.version);
        });
       }

    React.useEffect(() => {
        getVersion()     
      }, []);


    const getStarted =()=>{
        console.log("localStorage" + localStorage.getItem(Utils.WELCOME_PAGE_VISTIED_KEY));
        localStorage.setItem(Utils.WELCOME_PAGE_VISTIED_KEY, Utils.WELCOME_PAGE_VISTIED_VAL);
    }
    return(
        <div>                
            <Container className={classes.fullWidth}>              
                <Grid container spacing={2}>
                    <Grid item xs={9} className={classes.gridItemLeft}>
                        <h2 className={classes.welcomeTxt}>Welcome to Glasswall Desktop</h2>
                        <div className={classes.logo}>
                            <img src={logo} className={classes.logoImg}></img>
                            <h2 className={classes.heading}>Glasswall Desktop</h2>
                            <h6 className={classes.version}>{version}</h6>
                            <p className={classes.abtContent}>Glasswall Desktop is a desktop application that provides multi file drag and drop rebuild workflow.</p>
                        </div>
                        <div onClick={getStarted} className={classes.btnGroup}>
                            <Link to="/rebuildFiles" className={classes.getStartBtn}>Get Started</Link>                        
                        </div>
                        <footer>
                            <p className={classes.termsCondition}>Agree to the <a href={Utils.LICENSE_URL} className={classes.colorGreen}>Terms and Conditions.</a></p>
                        </footer>
                    </Grid>
                    <Grid item xs={3} className={classes.gridItemRight}>
                        <ReleaseNote/>
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </div>
        
    )
}

export default WelcomePage;