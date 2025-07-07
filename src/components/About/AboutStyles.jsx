import styled from 'styled-components';


export const AboutContainer = styled.div`
display: grid;
grid-template-columns: 35% 65%;
padding-left: 12%;
padding-right: 12%;
gap: 5%;
align-items: center;
`

export const Headshot = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  background-color: green;
  object-fit: cover;
`;

export const Bio = styled.div`
  font-size: clamp(10px, 2vw, 22px);
`;