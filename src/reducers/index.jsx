import { combineReducers } from "redux";
import user from "./user";
import doctor from "./doctor";
import section from "./section";
import post from "./post";
import comment from "./comment";
import chat from "./chat";
import { reducer as reduxFormReducer } from "redux-form";

const root = combineReducers({
  form: reduxFormReducer,
  user: user,
  doctor: doctor,
  section: section,
  post: post,
  comment: comment,
  chat: chat
});

export default root;
