import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';  // Import your rootReducer

// Optional: Redux DevTools are enabled by default with configureStore
const store = configureStore({
  reducer: rootReducer,
  // Optional: You can add middlewares or other custom configurations here
});

export default store;
