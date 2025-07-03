// import {FooterContainer, ItemsContainer, ItemTag, ItemLink} from "./FooterStyles.jsx"
import {footerLinks} from "../../Data/Data.jsx"

// function Footer(){
//     return(
//         <FooterContainer>
            
//             <ItemsContainer>

//                 {footerLinks.map((item, i) => {
//                     return (
//                         <ItemTag>
//                             <ItemLink href = {item.link} target = "_blank">
//                                 <i class = {item.iconClass}></i>
//                             </ItemLink>
//                         </ItemTag>
//                     )
//                 })} 


//             </ItemsContainer>

            

//         </FooterContainer>
//     )
// }


// import { footerLinks } from './footerLinks';
import { FooterWrapper, IconLink } from './FooterStyles.jsx';

function Footer() {

    return (

        <FooterWrapper>
            {footerLinks.map((item, i) => (
                <IconLink key={i} href={item.link} target="_blank" rel="noreferrer">
                    <i className={item.iconClass}></i>
                </IconLink>
            ))}
        </FooterWrapper>
        
    )
  
};


export default Footer;