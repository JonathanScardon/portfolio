import styled from 'styled-components';

// export const FooterContainer = styled.div`
// // background:lightblue;
// `

// export const ItemsContainer = styled.ul`
// list-style-type: None;
// `

// export const ItemTag = styled.li`
// `

// export const ItemLink = styled.a`
// color: 'inherit'
// `

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  border-top: 1px solid #444; /* subtle grey */
`;



export const IconLink = styled.a`
  color: white;                // white icons
  font-size: 2rem;             // control size
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration:None;
  transition: transform 0.25s ease;

  &:hover {
   transform: translateY(-5px);
  }

//   i {
//     vertical-align: middle;
//   }
`;