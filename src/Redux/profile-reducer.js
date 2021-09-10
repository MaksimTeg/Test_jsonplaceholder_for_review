import { profileAPI } from "../API/API";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  post: [],
  status: [],
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE: {
      return { ...state, post: action.post };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};
//****-ACTIONS-****
export const setPostsProfile = (post) => {
  return { type: SET_USER_PROFILE, post };
};
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getPostsProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileData(userId).then((data) => {
      dispatch(setPostsProfile(data));
    });
  };
};
export const newPost = (id, title, body) => async (dispatch) => {
  let response = await profileAPI.pushProfile(id, title, body)
  if (response.data !== null) {
    dispatch(setPostsProfile(id, title, body));
  }
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export default profileReducer;
