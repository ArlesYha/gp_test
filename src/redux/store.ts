import { type Person } from "../models";
import { configureStore } from "@reduxjs/toolkit";
import { favoritiesSlice, peopleSlice } from "./states";

export interface AppStore {
  people: Person[];
  favorities: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorities: favoritiesSlice.reducer,
  },
});
