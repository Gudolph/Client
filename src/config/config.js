//api 관리
import {persistReducer} from "redux-persist";
import {AuthReducer} from "../redux/reducers/AuthReducer";
import {createStore, combineReducers} from "redux";
//local storage 사용
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage
};

const allReducers = combineReducers({
    Auth: AuthReducer
});

const store = createStore(persistReducer(persistConfig, allReducers));
    window._REDUX_DEVTOOLS_EXTENSIONS__ && window._REDUX_DEVTOOLS_EXTENSIONS__();

export default store;