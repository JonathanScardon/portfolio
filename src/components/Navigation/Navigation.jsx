import { NavBar, NavList, NavItem, NavLink } from './NavigationStyles';

function Navigation() {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          <NavLink href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        <NavItem/>
          <NavLink href="#">Technologies</NavLink>
      </NavList>
    </NavBar>
  );
}

export default Navigation;