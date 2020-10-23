import * as React               from 'react';
import { Grid }                 from '@material-ui/core';
import Iframe                   from 'react-iframe'
import { makeStyles }           from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    iframe:{
        border:         '1px solid #ccc',
        float:          'left'
    }
}));

type appLink = {
    url: string
}

function WebIFrameView({url}:appLink){
    const classes = useStyles(); 
    return(           
        <Grid>
            <Iframe
                url= {url}
                width="100%"
                height="600"
                className={classes.iframe}
            ></Iframe>                                                              
        </Grid>
        
    )
}

export default WebIFrameView;