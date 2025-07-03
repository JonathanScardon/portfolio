import styled from 'styled-components';



export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 450px);
  gap: 5rem;
  padding: 2rem;
  justify-content: center;
  // background: green;
  // border-style:solid;
  border-width:1px;
`;



// Project box styling
export const ProjectContainer = styled.div`
text-align: center;
// width: 400px;
// background:grey;
// border-style:solid;
//   border-width:1px;
color:#F8F8FF	;

color:black;


// border: 1px solid #E0E0E0 ;


// background:	#222222	;   light black//

border-radius: 4%;




box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);


color: #CCCCCC;




font-family: 'Cascadia Code', monospace;

`

export const Title = styled.h3`
// margin: auto;
font-size:150%;
color: rgb(131, 195, 255);
`

export const ProjectImg = styled.img`
  max-width: 90%;         // scales horizontally
  max-height: 275px;      // caps tall images
  height: auto;           // preserves aspect ratio
  width: auto;            // allows natural width scaling
  border-radius: 2%;
  display: block;
  margin: 0 auto;
  object-fit: contain;    // makes sure image fits without cropping
`;

export const ProjectDescription = styled.div`
margin-top:2rem;
margin-bottom:3rem;
`


export const ToolsHeader = styled.div`
color:#ffb042
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

color:#e6e6e6;

// background: #62a7e8;
background: rgb(6, 122, 12);

`