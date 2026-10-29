import Logo from "../icons/logo.png";
import { 
  MenuContainer, 
  TopSection, 
  LogoImage, 
  NavigationList, 
  NavItem, 
  Separator
} from './Menu.styled';
import {Link} from "react-router";

function Menu() {
  return (
    <MenuContainer>
      <TopSection>
        <LogoImage src={Logo} alt="Logo" />
      </TopSection>
      <Separator/>
      <NavigationList>
        <NavItem>
          <Link to="/" >Home</Link>
          <Link to="/kitchenpage" >Kitchen</Link>
        </NavItem>
      </NavigationList>
    </MenuContainer>
  );
}

export default Menu;
