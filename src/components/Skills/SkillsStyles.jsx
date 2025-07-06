import styled from "styled-components"

export const SkillsContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const SkillGroup = styled.div`
padding-left: 2%;
padding-right: 2%;
`

export const SkillHeader = styled.div`
width: 100%;
text-align:center;
`

export const TechList = styled.ul`
list-style-type:None;
text-align:left;
margin:0px;
padding: 0px;
`

export const TechItem = styled.li`
display:flex;
flex-direction:column;
align-items:center;
display:inline-flex;
padding: 4px 8px;
margin:4px;
`

export const TechIcon = styled.img`
display: inline-block;
width: 2em;
height: 2em;
object-fit: contain;
`;