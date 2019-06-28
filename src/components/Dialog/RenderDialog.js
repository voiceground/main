import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

// dialogs
import SessionDialog from './SessionDialog';

export const dialogTypes = {
  SESSION_DIALOG: 'SESSION_DIALOG'
}

function RenderDialog(props) {

  return (
    <Dialog open={props.activeDialog ? true : false} aria-labelledby="dialog">
      {
        (() => {
          switch (props.activeDialog) {
            case dialogTypes.SESSION_DIALOG:   
              return <SessionDialog />
            default:
              return null;
          }
        })()
      }
      <></>
    </Dialog>
  );
}

export default connect((state)=>({...state}))(RenderDialog)

RenderDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

