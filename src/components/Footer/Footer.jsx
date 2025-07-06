import {footerLinks} from "../../Data/Data.jsx"
import { FooterWrapper, Links, IconLink, Test} from './FooterStyles.jsx';

// function Footer() {

//     return (
//         <>
//         <FooterWrapper>

//             <Links>
//             {footerLinks.map((item, i) => (
//                 <IconLink key={i} href={item.link} target="_blank" rel="noreferrer">
//                     <i className={item.iconClass}></i>
//                 </IconLink>
//             ))}
//             </Links>
//         </FooterWrapper>
//         <Test>Designed and developed in React by Jonathan Scardon © 2025</Test>
//         </>
//     )
  
// };


function Footer() {

    return (

        <FooterWrapper>
            <Test>Designed and developed in React by Jonathan Scardon © 2025</Test>
            {footerLinks.map((item, i) => (
                <IconLink key={i} href={item.link} target="_blank" rel="noreferrer">
                    <i className={item.iconClass}></i>
                </IconLink>
            ))}
        </FooterWrapper>
        
    )
  
};




export default Footer;