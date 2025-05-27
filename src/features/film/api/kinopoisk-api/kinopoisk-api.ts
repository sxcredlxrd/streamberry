import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Film = {
  page: number;
  limit: number;
  notNullFields?: string[];
  type?: string[];
  lists?: string[];
  sortField?: string[];
  sortType?: string[];
};

export const kinopoiskApi = createApi({
  reducerPath: "kinopoiskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("X-APi-KEY", import.meta.env.VITE_KP_API_KEY);
      headers.set("Content-Type", "application/json");
    },
  }),
  endpoints: (builder) => ({
    getFilmsByMovie: builder.query({
      query: ({
        page,
        limit,
        notNullFields,
        type,
        lists,
        sortField,
        sortType,
      }: Film) =>
        `movie?page=${page}&limit=${limit}&selectFields=&notNullFields=${notNullFields}&type=${type}&lists=${lists}&sortField=${sortField}&sortType=${sortType}`,
    }),
    getFilmById: builder.query({
      query: (id: number) => `movie/${id}`,
    }),
    getFilmsByName: builder.query({
      query: (query: string) => `movie/search?page=1&limit=10&query=${query}`,
    }),
  }),
});

export const {
  useGetFilmsByMovieQuery,
  useGetFilmByIdQuery,
  useGetFilmsByNameQuery,
} = kinopoiskApi;
