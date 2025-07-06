import styled from 'styled-components';


export const AboutContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: space-between;
// gap: 1rem;
// // padding-top: 50px;
// padding-bottom: 50px;

// // height: 1000px;


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

// max-height:400px;
// width:auto;
  border-radius: 8px;
  display: block;
  background-color: green;
  object-fit: cover;
`;

export const Bio = styled.div`
//   background: lightblue;
  width: 100%;
  display:flex;
  justify-content:center;
  font-size:17px;
`;
















// export const Headshot = styled.img`
// max-width: 300px;
// height: auto;
// border-radius: 8px;
// display: block;
// background-color:green;
// `

// export const Bio = styled.div`
// background:lightblue;
// `