import { NavBar, NavList, NavItem, NavLink } from './NavigationStyles';

function Navigation() {
  return (
    <NavBar>
      <NavList>

        <NavItem>
          <NavLink href="#home">Projects</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#about">Skills</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        
      </NavList>
    </NavBar>
  );
}

export default Navigation;