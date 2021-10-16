import { LOGIN } from '../actions';

const initialState = {
    isLoggedIn: false,
    user: {}
}

const loginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: !state.isLoggedIn,
                user: action.user
            };
        default:
            return state;
    }
}

export default loginReducer;