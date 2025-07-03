import styled from 'styled-components';

export const NavBar = styled.nav`
  // display: block;
  width: 100%;

    // background-color: #1A1A1A;


    // border-bottom: 1px solid #444; /* subtle grey */
    


  // position: fixed;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: black;
  width: 100%;
  height: 80px;
`;

export const NavItem = styled.li`
  /* no styles needed here unless you want */
`;

export const NavLink = styled.a`
  position: relative;
  color: #f3f4f6;

  padding: 10px 50px 10px 50px;

  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    left: 25%;
    right: 25%;
    bottom: 0;
    background:rgb(116, 116, 116);
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: center;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:hover {
    color:rgb(116, 116, 116);
  }
`;

