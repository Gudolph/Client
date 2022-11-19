//api 관리
import { persistReducer } from "redux-persist";
import { AuthReducer } from "./reducers/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
//local storage 사용
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const allReducers = combineReducers({
  Auth: AuthReducer,
});

// const store = createStore(
//   persistReducer(persistConfig, allReducers),
//   window._REDUX_DEVTOOLS_EXTENSIONS__ && window._REDUX_DEVTOOLS_EXTENSIONS__()
// );
const store = configureStore({
  reducer: persistReducer(persistConfig, allReducers),
});

export default store;
