import styled from "styled-components"

export const SkillsContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const SkillGroup = styled.div`
// background:pink;
// border-style:solid;
//   border-width:1px;
padding-left: 2%;
padding-right: 2%;
`

export const SkillHeader = styled.div`
width: 100%;
// background:green;
// border-style:solid;
//   border-width:1px;
`

export const SkillIcon = styled.img`

`

export const GroupName = styled.h3`
margin:0px;
padding:0px;
`

export const TechList = styled.ul`
// background:grey;
// border-style:solid;
//   border-width:1px;
list-style-type:None;
text-align:left;
margin:0px;
padding: 0px;
`

// export const TechIcon = styled.img`
// display:inline-block;
// `


export const TechItem = styled.li`
// border-style:solid;
// border-width:1px;
display:inline-flex;  //changed from inline-block

padding: 4px 8px;
margin:4px;
// border-radius:4px;
`



export const TechIcon = styled.img`
  display: inline-block;
  width: 1em;
  height: 1em;
  margin-right: .5em;
  object-fit: contain;
`;
