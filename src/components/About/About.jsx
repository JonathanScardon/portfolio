import {AboutContainer, Headshot, Bio} from './AboutStyles.jsx'
import {SectionContainer, Subheading, SectionLink} from '../../globalStyles.jsx'

function About(){
    return(

        <SectionContainer>
        <SectionLink id = "about">0</SectionLink>
        <Subheading>About</Subheading>

        <AboutContainer>
            <Headshot src="/public/images/Headshot.JPG" alt="" />

            <Bio>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus 
                        nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti 
                        sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. 
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus 
                        bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora
                        torquent per conubia nostra inceptos himenaeos.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
                        In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus
                        nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. 
                        Ad litora torquent per conubia nostra inceptos himenaeos.
            </Bio>
        </AboutContainer>

        </SectionContainer>
    )
}

export default About