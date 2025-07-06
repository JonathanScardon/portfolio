import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-top: 1px solid #444; /* subtle grey */
`;

export const Links = styled.div`
display:flex;
justify-content: center;
`

export const IconLink = styled.a`
  color: white;                // white icons
  font-size: 2rem;             // control size
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration:None;
  transition: transform 0.25s ease;

  // margin-left: 12%;

  &:hover {
   transform: translateY(-5px);
  }

//   i {
//     vertical-align: middle;
//   }
`;

export const Test = styled.div`
padding-top:15px;
text-align:center;
`