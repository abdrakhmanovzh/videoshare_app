import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
};

const userCombined = combineReducers({
    user: userReducer,
    video: videoReducer,
});

const persistedReducer = persistReducer(persistConfig, userCombined);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
