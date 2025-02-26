import styled from "styled-components";
import Backdrop from "./Backdrop";
import { useEffect, useState } from "react";


export const NavLink = styled.a`
 color: ${props=> props.theme.main} ;
 text-decoration: none;
 font-size: 18px;
 font-weight:600;
 letter-spacing: 1.44px;
 cursor: pointer;
 border-bottom: ${(props) => (props.active ? `2px solid ${props.theme.main}` : "none")};
 transition: border-bottom 0.3s ease-in-out;
 @media screen and (max-width: 990px) {
     
}
 `


export const StyledNav = styled.nav`
  display:flex;
  flex-direction: row;
  margin:1rem 0 1rem 0;
  padding: 0;
  gap:2rem;

  @media screen and (max-width: 990px) {
    flex-direction: column;
    gap:1rem;

}
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
  
  const sections = ["head", "featured", "experience", "stack"];

    const [activeSection, setActiveSection] = useState("");
  
    useEffect(() => {
      const handleScroll = () => {
        let currentSection = "";
  
        sections.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = id;
            }
          }
        });
  
        setActiveSection(currentSection);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <Wrapper show={open}>
        <StyledNav>
        {sections.map((id) => (
        <NavLink key={id} href={`#${id}`} active={activeSection === id}>
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </NavLink>
      ))}
        </StyledNav>
      </Wrapper>
    </>
  );
};

export default SideDrawer;
