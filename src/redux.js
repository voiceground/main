// actions
const UPDATE_SESSION_STATUS = 'UPDATE_SESSION_STATUS';
const UPDATE_SESSION_PASSWORD = 'UPDATE_SESSION_PASSWORD';
const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const DIALOG_TYPE = 'DIALOG_TYPE';
const NAVIGATE = 'NAVIGATE';

// action creators
export const actions = {
    sessionIsActive: () => ({
        type: UPDATE_SESSION_STATUS,
        sessionIsActive: true
    }),
    sessionNotActive: () => ({
        type: UPDATE_SESSION_STATUS,
        sessionIsActive: false
    }),
    updatePassword: (password) => ({
        type: UPDATE_SESSION_PASSWORD,
        sessionPassword: password
    }),
    drawerIsOpened: (state) => ({
        type: TOGGLE_DRAWER,
        drawerIsOpened: state
    }),
    setActiveDialog: (dialog) => ({
        type: DIALOG_TYPE,
        dialogToOpen: dialog
    }),
    navigateTo: (url) => ({
        type: NAVIGATE,
        destination: url
    })
}

// initial store
export const initialState = {
    sessionIsActive: false,
    sessionPassword: '',
    drawerIsOpened: false,
    activeDialog: '',
    activeScreen:'/welcome'
}

export function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_SESSION_STATUS:
            return Object.assign({}, state, {sessionIsActive: action.sessionIsActive});
        case UPDATE_SESSION_PASSWORD:
            return Object.assign({}, state, {sessionPassword: action.sessionPassword});
        case TOGGLE_DRAWER:
            return Object.assign({}, state, {drawerIsOpened: action.drawerIsOpened});
        case DIALOG_TYPE:
            return Object.assign({}, state, {activeDialog: action.dialogToOpen});
        case NAVIGATE:
            return Object.assign({}, state, {activeScreen: action.destination});
        default:
            return state;
        }
}