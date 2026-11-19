import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import data from "../../data/data.json";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface UsageData {
  month: string;
  usage: number;
}

interface Filters {
  dateFrom: string;
  dateTo: string;
  usageMin: number;
  usageMax: number;
}

const initialFilters: Filters = {
  dateFrom: "January",
  dateTo: "December",
  usageMin: 0,
  usageMax: 100,
};

interface LivingRoomState {
  usageData: UsageData[];
  filters: Filters;
  appliedFilters: Filters;
}

const initialState: LivingRoomState = {
  usageData: data.livingRoom.usageData,
  filters: initialFilters,
  appliedFilters: initialFilters,
};

export const livingRoomSlice = createSlice({
  name: "livingRoom",
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
    applyFilters: (state) => {
      state.appliedFilters = { ...state.filters };
    },

    updateUsage: (
      state,
      action: PayloadAction<{ month: string; usage: number }>,
    ) => {
      const item = state.usageData.find(
        (item) => item.month === action.payload.month,
      );

      if (item) {
        item.usage = action.payload.usage;
      }
    },
  },
});

export const { setFilters, applyFilters, updateUsage } =
  livingRoomSlice.actions;

export { months };

export default livingRoomSlice.reducer;
