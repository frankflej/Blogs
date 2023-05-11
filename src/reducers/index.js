import isAdmin from "./isAdmin";
import myAllBlogs from "./blogs";
import { combineReducers} from "redux";

const allReducers= combineReducers({
    isAdmin,myAllBlogs
})

export default allReducers;