import { configureStore} from "@reduxjs/toolkit";
import loggedReducer from "./Slice";


export default configureStore({

    reducer :   {
        logged: loggedReducer ,
    }
});