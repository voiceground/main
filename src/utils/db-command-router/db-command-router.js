import store from '../../redux-store'
import { actions } from '../../redux';

// types of the commands that come from database
const NAVIGATE = 'NAVIGATE';
const NAVIGATE_EXT = 'NAVIGATE_EXT';
const OPEN_DRAWER = 'OPEN_DRAWER';
const CLOSE_DRAWER = 'CLOSE_DRAWER';
const SESSION_IS_ACTIVE = 'SESSION_IS_ACTIVE';
const SESSION_NOT_ACTIVE = 'SESSION_NOT_ACTIVE';

// const NAVIGATE_TARGETS = {
//     'WELCOME' : '/welcome',
//     'ABOUT' : '/about',
//     'GIT' : 'https://www.9gag.com'
// }

export default function dbCommandRouter ([type, target = '/']) {
    switch (type) {
        case NAVIGATE:
            store.dispatch(actions.navigateTo(target));
            break;
        case NAVIGATE_EXT:
            window.open(target, '_blank');
            break;
        case OPEN_DRAWER:
            store.dispatch(actions.drawerIsOpened(true));
            break;
        case CLOSE_DRAWER:
            store.dispatch(actions.drawerIsOpened(false));
            break;
        case SESSION_IS_ACTIVE:
            store.dispatch(actions.sessionIsActive());
            store.dispatch(actions.setActiveDialog(''));
            break;
        case SESSION_NOT_ACTIVE:
            store.dispatch(actions.updatePassword(''));
            store.dispatch(actions.sessionNotActive());
            break;
        default:
            return;
    }
}