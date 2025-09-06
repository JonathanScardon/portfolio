import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding-left: 10%;
  padding-right: 10%;
  gap: 2rem;
  align-items: center;

  @media (min-width: 1920px){
    padding-left: 15%;
    padding-right: 15%;
  }
`;

export const HeadshotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Headshot = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 5%;
  object-fit: cover;
`;

export const Bio = styled.div`
  font-size: clamp(14px, 2vw, 20px);
`;
