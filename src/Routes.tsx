import { Route, Routes as Switch } from "react-router";
import HomePage from "./pages/HomePage";
import Wrapper from "./pages/Wrapper";
import KitchenPage from "./pages/KitchenPage";
import SettingsPage from "./pages/SettingsPage";
import LivingRoomPage from "./pages/LivingRoomPage";
import Bedroom from "./pages/Bedroom";

function Routes() {
  return (
    <Switch>
      <Route element={<Wrapper />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/livingroompage" element={<LivingRoomPage />} />
        <Route path="/kitchenpage" element={<KitchenPage />} />
        <Route path="/settingspage" element={<SettingsPage />} />
      </Route>
    </Switch>
  );
}

export default Routes;
