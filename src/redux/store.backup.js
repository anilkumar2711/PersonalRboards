import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { combineReducers } from 'redux';
import initialState from './state';

// Function to create Noop Storage for SSR
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
const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local') // Use localStorage in the browser
        : createNoopStorage(); // Use noop storage during SSR

const persistConfig = {
    key: 'root', // Key for storage
    storage, // Dynamic storage based on environment
};

// Helper function to set nested state
function setNested(state, name, value) {
    if (!name || typeof name !== 'string') {
        throw new Error('Invalid name path');
    }

    const keys = name.split('.');
    let tmp = state;

    // Helper function to determine default structure
    const getDefaultStructure = (key) => (isNaN(key) ? {} : []);

    for (let i = 0; i < keys.length - 1; i++) {
        const key = isNaN(keys[i]) ? keys[i] : +keys[i]; // Handle numeric keys for arrays
        if (tmp[key] === undefined || tmp[key] === null) {
            tmp[key] = getDefaultStructure(keys[i + 1]);
        }
        tmp = tmp[key];
    }

    // Set the final value
    const finalKey = isNaN(keys[keys.length - 1]) ? keys[keys.length - 1] : +keys[keys.length - 1];
    tmp[finalKey] = value;

    return state;
}

// Create a slice
const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setStore: (state, action) => {
            const { name, value } = action.payload;
            setNested(state, name, value);
        },
    },
});

// Combine reducers
const rootReducer = combineReducers({
    root: rootSlice.reducer,
});

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Export actions
export const { setStore } = rootSlice.actions;

// Create the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Disable serializability check for Redux Persist
        }),
});

// Create persistor
export const persistor = typeof window !== 'undefined' ? persistStore(store) : null;

export default store;
