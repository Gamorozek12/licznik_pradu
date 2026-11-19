import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  description: string;
  apiUrl: string;
  state: string;
}

const initialState: SettingsState = {
  description: "",
  apiUrl: "",
  state: "",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<SettingsState>) => {
      state.description = action.payload.description;
      state.apiUrl = action.payload.apiUrl;
      state.state = action.payload.state;
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
