import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../pages/SettingsPage/SettingsSlice";
import LivingRoomReducer from "../pages/LivingRoomPage/LivingRoomSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    livingRoom: LivingRoomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
