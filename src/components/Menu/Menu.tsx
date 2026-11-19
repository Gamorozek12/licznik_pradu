import Logo from "../../icons/logo.png";
import {
  MenuContainer,
  TopSection,
  LogoImage,
  NavigationList,
  NavItem,
  Separator,
} from "./Menu.styled";
import { NavLink } from "react-router";

function Menu() {
  return (
    <MenuContainer>
      <TopSection>
        <LogoImage src={Logo} alt="Logo" />
      </TopSection>
      <Separator />
      <NavigationList>
        <NavItem>
          <NavLink to="/homepage">Home</NavLink>
          <NavLink to="/bedroom">Bedroom</NavLink>
          <NavLink to="/livingroompage">Living Room</NavLink>
          <NavLink to="/kitchenpage">Kitchen</NavLink>
          <NavLink to="/settingspage">Settings</NavLink>
        </NavItem>
      </NavigationList>
    </MenuContainer>
  );
}

export default Menu;
