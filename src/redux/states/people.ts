import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageType, type Person } from "../../models";
import { getLocalStorage, setLocalStorage } from "../../utilities";

const initialState: Person[] = [];

export const peopleSlice = createSlice({
  name: LocalStorageType.PEOPLE,
  initialState: getLocalStorage(LocalStorageType.PEOPLE)
    ? JSON.parse(getLocalStorage(LocalStorageType.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      setLocalStorage(LocalStorageType.PEOPLE, state);

      return action.payload;
    },
  },
});

export const { addPeople } = peopleSlice.actions;
