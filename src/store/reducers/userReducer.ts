import { UserAction, UserActionTypes, userState } from "../../types/user";

const initialState: userState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserAction
): userState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
