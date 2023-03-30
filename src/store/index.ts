import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {
    api
} from './slices/api'
import sessionSlice, {
    sessionInitialState
} from './slices/session'
import {useDispatch, useSelector} from "react-redux";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
        [api.reducerPath]: api.reducer,
        [sessionSlice.name]: sessionSlice.reducer,
    });

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['session']
}

const persistedReducer = persistReducer(persistConfig, reducer)
const rtkMiddlewares = (getDefaultMiddleware: any) => {
    let defaultMiddleware = getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    });
    return defaultMiddleware
        .concat(api.middleware);
};

export const store = configureStore({
    reducer: persistedReducer,
    middleware: rtkMiddlewares,
    preloadedState: {
        [sessionSlice.name]: sessionInitialState,
    },

    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = (fn: (state: RootState) => unknown) => useSelector<RootState, any>(fn)
