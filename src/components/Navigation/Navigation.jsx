import { NavBar, NavList, NavItem, NavLink } from './NavigationStyles';

function Navigation() {
  return (
    <NavBar>
      <NavList>

        <NavItem>
          <NavLink href="#projects">Projects</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#skills">Skills</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="#about">About</NavLink>
        </NavItem>
        
      </NavList>
    </NavBar>
  );
}

export default Navigation;