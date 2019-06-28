import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"
//import { actions } from './redux'

// utils
import { dbInitiateSession } from './utils/firebase/firebase';

// components
import Welcome from "./components/Welcome"

function Routes (props) {
    
return (
    <>
        <Route path="/"
            render={ () => {
                    if (!props.sessionIsActive && !props.sessionPassword){
                        dbInitiateSession();
                        return null;
                    }
                    else {
                        return <Redirect to={props.activeScreen} />
                    }
                }
            }
        />
        <Route exact path="/welcome"
            component={Welcome}
        />
        <Route exact path="/about"
            render={()=>'Huy na'}
        />
    </>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         goTo: (url) => dispatch(actions.navigateTo(url))
//     }
// }

export default connect((state)=>({...state}), )(Routes)