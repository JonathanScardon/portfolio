import {NavList, NavLink } from './NavigationStyles';

function Navigation() {
  return (
    <NavList>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#skills">Skills</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>  
    </NavList>
  );
}

export default Navigation;