import React from "react";
import { connect } from 'react-redux';
import { actions } from '../redux';

const RTestboard = (props) => {

    //console.log(props.drawerIsOpened)
    return (
        <>
        <button onClick={() => props.updateSessionIsActive()}>Session to Active</button>
        <button onClick={() => props.toggleDrawer(props.drawerIsOpened)}>Toggle Drawer</button>
        </>
    );
}

const mapStateToProps = state => {
    return {...state};
}
  
const mapDispatchToProps = dispatch => {
    return {
        updateSessionIsActive: () => dispatch(actions.sessionIsActive()),
        toggleDrawer: (state) => dispatch(actions.drawerIsOpened(!state))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RTestboard);