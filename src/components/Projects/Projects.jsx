import {ProjectGrid, ProjectContainer, Title, ProjectImg, ProjectDescription, ToolsHeader, ToolsList, ToolItem, SupportLink} from "./ProjectStyles.jsx"
import {SectionContainer, Subheading} from "../../globalStyles.jsx"
import {projects} from "../../Data/Data.jsx"

function Projects(){
    return(
        <SectionContainer>
        <Subheading id = "projects">Projects</Subheading>
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
            }
            )
            }


        </ProjectGrid>

        </SectionContainer>
    )
}

export default Projects;