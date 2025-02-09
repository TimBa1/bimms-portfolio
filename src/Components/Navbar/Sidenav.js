import styled from "styled-components";
import Backdrop from "./Backdrop";


const NavLink = styled.a`
 color: ${props=> props.theme.main} ;
 text-decoration: none;
 font-size: 18px;
 letter-spacing: 1.44px;
 cursor: pointer;
 `


const StyledNav = styled.nav`
  display:flex;
  flex-direction: column;
  margin:1rem 0 1rem 0;
  padding: 0;
  gap:1rem;

 
`;
const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  top: 5.5rem; /* Positioned under the navbar */
  right: 4rem;  /* Anchored to the right */
  background: ${(props) => props.theme.background};
  padding: 1rem 16px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  position: fixed;
  z-index: 999;
  /* When show is false, slide it upward off-screen.
     When show is true, bring it back into view. */
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-100%)"};

@media screen and (max-width: 900px) {
  top: 4rem; /* Positioned under the navbar */
  right: 1rem;
}
`;


const SideDrawer = ({ open, closed }) => {
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Wrapper show={open}>
        <StyledNav>
          <NavLink href={'#head'}>Home</NavLink>
          <NavLink href={'#featured'}>Featured Work</NavLink>
          <NavLink href={'#experience'}>Experience</NavLink>
          <NavLink href={'#stack'}>Skills</NavLink>
        </StyledNav>
      </Wrapper>
    </>
  );
};

export default SideDrawer;
