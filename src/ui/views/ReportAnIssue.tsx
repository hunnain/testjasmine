import * as React                       from 'react';
import { makeStyles }                   from '@material-ui/core/styles';
import { Container, Grid }              from '@material-ui/core';
import Header                           from '../components/Header';
import Footer                           from '../components/Footer';
import Loader                           from '../components/Loader';
import WebIFrameView                    from '../components/WebIFrameView';
import * as Utils                       from '../utils/utils';

const useStyles = makeStyles((theme) => ({
    pageContainer:{
        margin:         '0'
    },
    heading:{
        margin:         '0px 0 20px 0',
        float:          'left',
        width:          '100%'
    }
   
  }));

const { useState, useEffect } = React;  
function ReportAnIssue(){
    const classes = useStyles();
    const [showLoader, setShowLoader] = useState(true);
  
    useEffect(() => {
        let loadingTime = process.platform == 'win32'? 5000:3000;
        setTimeout(() => {
            setShowLoader(false);
        },loadingTime);
    }, []); 
    return(
        <div>            
            <Header showBack={true} ></Header>  
            <Container>
                <Grid>
                <div className={classes.pageContainer}>   
                {showLoader  && <Loader/> }   
                        <WebIFrameView url = {Utils.REPO_GIT_ISSUE_URL} />
                </div>
                </Grid>
            </Container>
            <Footer/>
        </div>
    )
}

export default ReportAnIssue;