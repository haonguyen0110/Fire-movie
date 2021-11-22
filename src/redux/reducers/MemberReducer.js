import { GETPROFILE, SIGN_IN } from "../types/MemberType";
import { TOKEN, USER_LOGIN } from "../../util/config";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault = {
    userLogin: user,
    signIn: false,
    bookingInformation: [],
    name: ''
}

export const MemberReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SIGN_IN: {
            const { signInDetail } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(signInDetail));
            localStorage.setItem(TOKEN, signInDetail.accessToken);
            return { ...state, userLogin: signInDetail }
        }

        case GETPROFILE: {
            state.bookingInformation = action.bookingInformation
            state.name = action.name
            return { ...state }
        }

        default: return { ...state }
    }
}