import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../../src/features/user/userSlice"
import movieReducer from "../../src/features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});