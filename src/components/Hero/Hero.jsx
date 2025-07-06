import { Typewriter } from 'react-simple-typewriter';
import {SectionContainer} from '../../globalStyles.jsx'
import {HeroContainer, Name, TerminalContainer, TerminalHeader, RedDot, GreenDot, YellowDot, 
TerminalTitle, TerminalBody} from './HeroStyles.jsx'

function Hero() {
  return (
    
    <SectionContainer>
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
                <p>
                    <span>~/jonathan_s$</span>{' '}
                    <Typewriter
              words={[
                'hello world',
                'welcome to my website!',
              ]}
              loop={0}
              cursor
              cursorStyle="▋"
              typeSpeed={100}
              deleteSpeed={40}
              delaySpeed={2000}
            />
                </p>
            </TerminalBody>

        </TerminalContainer>
        
    </HeroContainer>
    </SectionContainer>
  );
}


export default Hero