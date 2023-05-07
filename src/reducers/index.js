import { combineReducers } from "redux";
import propertiesReducer from "./propertiesReducer";

const rootReducer = combineReducers({
  properties: propertiesReducer,
});

export default rootReducer;