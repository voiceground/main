import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux"

function SessionDialog(props) {
    return (
      <>
        <DialogTitle >
          Welcome to Voiceground
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Your password is : {props.sessionPassword}
          </Typography>
        </DialogContent>
      </>
    );
  }
  
  export default connect((state)=>({...state}))(SessionDialog)