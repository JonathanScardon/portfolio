import {ProjectGrid, ProjectContainer, Title, ProjectImg, ProjectDescription, ToolsHeader, ToolsList, ToolItem} from "./ProjectStyles.jsx"
import {Subheading} from "../../globalStyles.jsx"
import {projects} from "../../Data/Data.jsx"

function Projects(){
    return(
        <>
        <Subheading>Projects</Subheading>
        <ProjectGrid>


            {projects.map((p, i) => {

                return(
                    
                    <ProjectContainer key = {i}>
                    
                        <Title>
                            {p.title}
                        </Title>

                        <ProjectImg src = {p.image}/>

                        <ProjectDescription>
                            {p.description}
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

        </>
    )
}

export default Projects;