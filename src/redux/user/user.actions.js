import UserActionTypes from "./user.types";

// export const setCurrentUser = user => {
//     return ({
//         type: UserActionTypes.SET_CURRENT_USER,
//         payload: user
//     });
// };

export const googleSignInStart = () => {
    return ({
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    });
};

export const signInSuccess = (user) => {
    // debugger
    return ({
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    });
};

export const signInFailure = (error) => {
    return ({
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    });
};

export const emailSignInStart = (emailAndPassword) => {
    // debugger
    return ({
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    });
};

export const checkUserSession = () => {
    return ({
        type: UserActionTypes.CHECK_USER_SESSION
    })
};

export const signOutStart = () => {
    // debugger
    return ({
        type: UserActionTypes.SIGN_OUT_START
    });
};
export const signOutSuccess= () => {
    // debugger
    return ({
        type: UserActionTypes.SIGN_OUT_SUCCESS
    });
};

export const signOutFailure = (error) => {
    return ({
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    });
};

// export const emailSignInSuccess = (user) => {
//     return ({
//         type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//         payload: user
//     });
// };

// export const emailSignInFailure = (error) => {
//     return ({
//         type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//         payload: error
//     });
// };