import { Route, Routes as Switch } from "react-router";
import HomePage from "./pages/HomePage";
import Wrapper from "./pages/Wrapper";
import KitchenPage from "./pages/KitchenPage";

function Routes(){

  return(
      <Switch>
        <Route element={<Wrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/kitchenpage" element={<KitchenPage />} />
        </Route>
      </Switch>
      
  );
}

export default Routes;

