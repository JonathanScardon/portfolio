import {skills} from "../../Data/Data.jsx"
import {Subheading} from "../../globalStyles.jsx"
import {SkillsContainer, SkillGroup, SkillHeader, SkillIcon, GroupName, TechList, TechIcon, TechItem} from "./SkillsStyles.jsx"

function Skills(){
    return(
        <>
        <Subheading>
            Skills
        </Subheading>

        <SkillsContainer>

            {skills.map((s, i) => {
                return(
                    <SkillGroup key = {i}>

                        <SkillHeader>

                            <SkillIcon src = {s.image}/>

                            <GroupName>
                                {s.group}
                            </GroupName>

                        </SkillHeader>

                        {/* <TechList>
                            {s.tools.map((t, i) => (
                                <div key={i}>
                                <img src={t.image} alt={t.name} />
                                <TechItem>{t.name}</TechItem>
                            </div>
                        ))}
                        </TechList> */}

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

                        {/* <TechList>
                            {s.tools.map((t, i) => {
                                return (
                                    <TechItem key = {i}>{t.name}</TechItem>
                                )
                            })}
                        </TechList> */}


                    </SkillGroup>          
                )
            })}

        </SkillsContainer>
        </>
    )
}

export default Skills