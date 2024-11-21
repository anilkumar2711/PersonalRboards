// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import initialState from './state';

function setNested(state, name, value) {
    if (!name || typeof name !== "string") {
        throw new Error("Invalid name path");
    }

    let keys = name.split(".");
    let tmp = state;

    // Helper function to determine default structure
    const getDefaultStructure = (key) => (isNaN(key) ? {} : []);

    for (let i = 0; i < keys.length - 1; i++) {
        let key = isNaN(keys[i]) ? keys[i] : +keys[i]; // Handle numeric keys for arrays
        if (tmp[key] === undefined || tmp[key] === null) {
            tmp[key] = getDefaultStructure(keys[i + 1]);
        }
        tmp = tmp[key];
    }

    // Set the final value
    let finalKey = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : +keys[keys.length - 1];
    tmp[finalKey] = value;

    return state;
}


const createNoopStorage = () => ({
    getItem(_key) {
        return Promise.resolve(null);
    },
    setItem(_key, _value) {
        return Promise.resolve();
    },
    removeItem(_key) {
        return Promise.resolve();
    },
});

// Conditionally choose storage based on the environment
// const storageProxy = typeof window !== 'undefined' ? globalThis.localStorage  : createNoopStorage();
const storageProxy = storage;

const persistConfig = {
    key: 'root', // Key for storage
    storage, // Define storage (localStorage)
};

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setStore: (state, action) => {
            let { name, value } = action.payload;
            setNested(state, name, value);
        }
    },
});

const rootReducer = combineReducers({
    root: rootSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const { setStore } = rootSlice.actions;


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check for Redux Persist
        }),
});

export const persistor = persistStore(store);

export default store;
