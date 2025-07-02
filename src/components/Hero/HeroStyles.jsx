import styled from 'styled-components';

export const HeroContainer = styled.div`
height: 100vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 0 20px;
`

export const Name = styled.div`
  color: #f1f5f9;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
`

export const TerminalContainer = styled.div`
 background-color: #1a1a1a;
  width: 600px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 0 20px #16f2b3;
`

export const TerminalHeader = styled.div`
background-color: #333;
  padding: 8px 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`


const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

export const RedDot = styled(Dot)`
  background-color: #ff5f56;
`

export const YellowDot = styled(Dot)`
  background-color: #ffbd2e;
`

export const GreenDot = styled(Dot)`
  background-color: #27c93f;
`

export const TerminalTitle = styled.p`
 color: #aaa;
  margin-left: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
`

export const TerminalBody = styled.div`
// padding: 20px;p
padding-left: 2%;
  color: #16f2b3;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
`

export const TerminalLine = styled.p`

`