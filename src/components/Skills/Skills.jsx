import {skills} from "../../Data/Data.jsx"
import {SectionContainer, Subheading, SectionLink} from "../../globalStyles.jsx"
import {SkillsContainer, SkillGroup, SkillHeader, TechList, TechIcon, TechItem} from "./SkillsStyles.jsx"

function Skills(){
    return(
        <SectionContainer>
        <SectionLink id = "skills">0</SectionLink>
        <Subheading>Skills</Subheading>

        <SkillsContainer>

            {skills.map((s, i) => {
                return(
                    <SkillGroup key = {i}>

                        <SkillHeader>

                            <h3>
                                {s.group}
                            </h3>

                        </SkillHeader>

                        <TechList>
                            {s.tools.map((t, i) => {
                                return (              
                                    <TechItem key = {i}>
                                        <TechIcon src = {t.image}/>
                                        {t.name}
                                    </TechItem>
                                )
                            })}
                        </TechList>

                    </SkillGroup>          
                )
            })}

        </SkillsContainer>
        </SectionContainer>
    )
}

export default Skills