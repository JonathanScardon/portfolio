import styled from 'styled-components';


export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 5rem;
  padding: 2rem;
  justify-content: center;
  border-width:1px;
`;

export const ProjectContainer = styled.div`
text-align: center;


color:rgb(248, 248, 255);
color: rgb(204, 204, 204);


// border: 1px solid #E0E0E0 ;


// background:	#222222	;   light black//

border-radius: 4%;




box-shadow: 0 0 8px rgba(255, 255, 255, .3);


font-family: 'Cascadia Code', monospace;

`

export const Title = styled.h3`
// margin: auto;
font-size:150%;
color: rgb(131, 195, 255);
color: #60a5fa;
`

export const ProjectImg = styled.img`
  max-width: 90%;
  max-height: 275px;
  height: auto;
  width: auto;
  border-radius: 2%;
  display: block;
  margin: 0 auto;
  object-fit: contain;
`;

export const ProjectDescription = styled.div`
margin-top:2rem;
margin-bottom:3rem;
margin-left:5%;
margin-right:5%;
`


export const ToolsHeader = styled.div`
color:rgb(218, 145, 18);
`

export const ToolsList = styled.ul`
list-style-type: None;
padding: 0;
`

export const ToolItem = styled.li`
display:inline-block;
padding: 4px 8px;
margin: 4px;
border-radius:4px;
background: rgb(5, 94, 9);
`


export const SupportLink = styled.a`
color: inherit;
text-decoration-color: rgb(130, 130, 130);

`