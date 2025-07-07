import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-top: 1px solid #444;
`;

export const IconLink = styled.a`
  color: white;
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration:None;
  transition: transform 0.25s ease;

  &:hover {
   transform: translateY(-5px);
  }
`;

export const Message = styled.div`
padding-top:15px;
text-align:center;
`