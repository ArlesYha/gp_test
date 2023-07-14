import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageType, type Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];

const initialStateTest = () => {
  const localStorageData = getLocalStorage(LocalStorageType.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageType.FAVORITES) as string)
    : initialState;

  return localStorageData;
};

export const favoritiesSlice = createSlice({
  name: LocalStorageType.FAVORITES,
  initialState: initialStateTest(),
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageType.FAVORITES, state);

      return action.payload;
    },
  },
});

export const { addFavorite } = favoritiesSlice.actions;
