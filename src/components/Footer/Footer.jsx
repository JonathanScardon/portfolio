import {footerLinks} from "../../Data/Data.jsx"
import { FooterWrapper, IconLink, Message} from './FooterStyles.jsx';

function Footer() {

    return (

        <FooterWrapper>
            <Message>Designed and developed in React by Jonathan Scardon © 2025</Message>
            {footerLinks.map((item, i) => (
                <IconLink key={i} href={item.link} target="_blank" rel="noreferrer">
                    <i className={item.iconClass}></i>
                </IconLink>
            ))}
        </FooterWrapper>
    )
  
};


export default Footer;