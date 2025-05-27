import { createSlice } from "@reduxjs/toolkit";

type CurrentQuery = {
  page: number;
  limit: number;
  notNullFields: string[];
  type: string[];
};

const initialState: CurrentQuery = {
  page: 1,
  limit: 20,
  notNullFields: ["id", "name", "enName", "genres.name", "poster.url"],
  type: ["movies"],
};

export const currentQuery = createSlice({
  name: "currentQuery",
  initialState,
  reducers: {},
});

export default currentQuery.reducer;
