import { Typewriter } from 'react-simple-typewriter';
import {HeroContainer, Name, TerminalContainer, TerminalHeader, RedDot, GreenDot, YellowDot, 
TerminalTitle, TerminalBody, TerminalLine} from './HeroStyles.jsx'

function Hero() {
  return (

    <HeroContainer>

        <Name>Jonathan Scardon</Name>

        <TerminalContainer>
            
            <TerminalHeader>
                <RedDot/>
                <YellowDot/>
                <GreenDot />
                <TerminalTitle>~/jonathan_s</TerminalTitle>
            </TerminalHeader>

            <TerminalBody>
                <TerminalLine>
                    <span>~/jonathan_s$</span>{' '}
                    <Typewriter
              words={[
                'hello world',
                'welcome to my website!',
              ]}
              loop={0}
              cursor
              cursorStyle="▋"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
                </TerminalLine>
            </TerminalBody>

        </TerminalContainer>
        
    </HeroContainer>

  );
}


export default Hero