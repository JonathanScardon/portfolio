import {ProjectGrid, ProjectContainer, Title, ProjectImg, ProjectDescription, ToolsHeader, ToolsList, ToolItem} from "./ProjectStyles.jsx"
import {SectionContainer, Subheading, SectionLink, SupportLink} from "../../globalStyles.jsx"
import {projects} from "../../Data/Data.jsx"

function Projects(){
    return(
        <SectionContainer>
        <SectionLink id = "projects">0</SectionLink>
        <Subheading>Projects</Subheading>
        <ProjectGrid>

            {projects.map((p, i) => {

                return(
                    
                    <ProjectContainer key = {i}>
                    
                        <Title>
                            {p.title}
                        </Title>

                        <a href = {p.link} target = "_blank">
                        <ProjectImg src = {p.image}/>
                        </a>

                       <ProjectDescription>
                            {p.descriptionParts.map((part, index) => {
                                if (typeof part === 'string') {
                                    return part;
                                } else if (part.type === 'link') {
                                return (
                                    <SupportLink
                                    key={index}
                                    href={part.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    >
                                        {part.text}
                                    </SupportLink>
                                );
                                }
                            })}
                        </ProjectDescription>

                        <ToolsHeader>Tools</ToolsHeader>
                        <ToolsList>
                            {p.tools.map((t, i) => {
                                return <ToolItem key = {i}>{t}</ToolItem>
                            })}
                        </ToolsList>

                    </ProjectContainer>
                )
            })}

        </ProjectGrid>

        </SectionContainer>
    )
}

export default Projects;