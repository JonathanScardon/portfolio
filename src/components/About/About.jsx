import {AboutContainer, Headshot, Intro} from './AboutStyles.jsx'

function About(){
    return(
        <AboutContainer>
            <Intro>
                <h1>
                    Hi, I'm Jonathan!
                </h1>
                <div>
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
                    </div>
            </Intro>
            <Headshot src="/public/images/Headshot.JPG" alt="" />
        </AboutContainer>
    )
}

export default About