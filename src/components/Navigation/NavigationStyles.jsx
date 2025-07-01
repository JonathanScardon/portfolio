import styled from 'styled-components';

export const NavBar = styled.nav`
  // display: block;
  width: 100%;
  // background: black;

    background-color: #1A1A1A;

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
  text-decoration: none;
  color: white;
  margin-left: 100px;
  padding: 10px 50px 10px 50px;
  border-radius: 2%;

  &:hover {
    background-color: grey;
    //color: aquamarine;
  }
`;
