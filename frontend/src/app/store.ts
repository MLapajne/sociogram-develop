import { configureStore } from "@reduxjs/toolkit";

import formUrlsReducer from "../features/urls/formUrlsSlice";
import formPeopleReducer from "../features/urls/formPeopleSlice";
import formPostReducer from "../features/formPost/formPostSlice";

export const store = configureStore({
  reducer: {
    formUrls: formUrlsReducer,
    formPeople: formPeopleReducer,
    formPost: formPostReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
