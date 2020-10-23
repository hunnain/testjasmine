
import * as React               from 'react';
import { Container, Grid }      from '@material-ui/core';
import { makeStyles }           from '@material-ui/core/styles';
import spinner                  from '../assets/images/spinner.png'

const useStyles = makeStyles((theme) => ({
    loader:{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        left: '0',
        top: '0',
        background: 'rgba(255,255,255,0.8)'
    }
   
  }));

function Loader (){
    const classes = useStyles(); 
    return(           
        <Container>  
            <Grid>
                <div className={classes.loader}><img src={spinner} height="100"/></div>
            </Grid>
        </Container>
    )
}

export default Loader;
