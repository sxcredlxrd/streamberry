import { configureStore } from "@reduxjs/toolkit";
import { currentQuery } from "@/features/film";
import { kinopoiskApi } from "@/features/film/api/kinopoisk-api/kinopoisk-api.ts";

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQuery,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
