import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


export const Layout = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  background:rgb(18, 18, 18);
  padding-bottom: 10px;
  color: rgb(225, 232, 240);
  font-family: "IBM Plex Mono", monospace;
`

export const SectionLink = styled.div`
color: rgb(18, 18, 18);
font-size: 1px;
`

export const Subheading = styled.h2`
text-align:center;
font-size:2.5rem;
`

const Wrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  transform: translateY(${props => (props.visible ? '0px' : '20px')});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

export const SectionContainer = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <Wrapper style = {{paddingBottom: '100px'}} ref={ref} visible={visible}>{children}</Wrapper>;
};