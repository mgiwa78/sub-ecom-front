import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnhancer = compose(applyMiddleware(...middleware));

export const store = createStore(rootReducer, undefined, composedEnhancer);
