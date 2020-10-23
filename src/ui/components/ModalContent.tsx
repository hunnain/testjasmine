import * as React               from 'react';
import { makeStyles }           from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    modalContainer:{
        minWidth:               '500px'
      },
    issueForm:{
      width:                    '100%',
          '& label':{
              width:            '100%',
              margin:           '0 0 10px 0',
              float:            'left',
              fontWeight:       'bold',
              color:            '#0c3451',
      },
          '& textarea':{
              width:            '100%',
              minHeight:        '220px',
              padding:          '10px',
              border:           '1px solid #ccc',
              borderRadius:     '3px',
              marginBottom:     '10px'    
            },
          '& input':{
              width:            '100%',
              marginBottom:     '10px',
              border:           '1px solid #ccc',
              padding:          '10px',
              borderRadius:     '3px'
          },
          '& h3':{
            color:              '#0c3451'
        }            
    },
    heading:{
        background:             '#0c3451',
        color:                  '#fff',
    },
    submitBtn:{
        float:                  'right',
        padding:                '10px 20px',
        background:             '#0c3451',
        border:                 'none',
        cursor:                 'pointer',
        color:                  '#fff',        
        borderRadius:           '3px',
          '&:focus':{
              outline:          '0',
              border:           '0'
        }
    },
    errorMsg:{
        color:                  'red',
        margin:                 '0px 0 10px 0',
        fontSize:               '13px',
        display:                'none'
    },
    successMsg:{
        color:                  'green',
        margin:                 '0px 0 10px 0',
        fontSize:               '13px',
        display:                'none'
    }
 }));


function ModalContent(){
    const classes = useStyles(); 
    return(                
        <div className={classes.modalContainer}>
            <div className={classes.issueForm}>
                <div className={classes.errorMsg}>Please Enter Title</div>
                <div className={classes.successMsg}>Issue has been created successuly </div>
                <h3>Create Issue</h3>
                <input type="text" placeholder="title"/>
                <div className={classes.errorMsg}>Title can not be empty</div>
                <textarea></textarea>
                <div className={classes.errorMsg}> This field can not be empty</div>
                <button className={classes.submitBtn}>Submit New Issue</button>
            </div>
        </div>        
    )
}

export default ModalContent;