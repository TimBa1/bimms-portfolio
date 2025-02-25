import styled from "styled-components";
import ham from "../../assets/icons/ham.svg";
import logo from "../../assets/icons/logo.svg";
import Button from "../Button";
import { NavLink, StyledNav } from "./Sidenav";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  width: 100%;
  z-index: 9999;
  text-decoration: none;
  color: ${props => props.text};
  transition: background-color 0.3s ease;
  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  z-index: 999;
  @media screen and (max-width: 900px) {
    width: 95%;
    margin: 0 auto;
    padding: 10px 15px;
  }
`;

const Right = styled.div`
  background-color: ${({ theme }) => theme.background};
  width: fit-content;
  background-color: #eedcd5;
  border-radius: 5px;
  height: 43px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    background-color: transparent;
    width: fit-content;
    padding: 0 20px 0 0;
    .hide {
      display: none;
    }
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  img {
    height: 30px;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  display: none;
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 14px;
      height: 14px;
    }
  }
  @media screen and (max-width: 990px) {
    display: flex;
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  color:${({ theme }) => theme.main};
  font-weight:700;
  font-size:30px;
  .logo {
    height: 40px;
    color: black !important;
    @media screen and (max-width: 900px) {
      height: 50px;
    }
  }
  @media screen and (max-width: 990px) {
      font-size:25px;
    }
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 990px) {
    display:none;

  }
`;
function Navbar({ openSideDrawer }) {
  const sections = ["head", "featured", "experience", "stack"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";

      sections.forEach(id => {
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
    <StyledHeader>
      <Wrapper>
        <Name>
        BIMM'S
          {/* <img src={logo} className="logo" alt="logo" /> */}
        </Name>
        <Middle>
          <StyledNav>
            {sections.map(id =>
              <NavLink key={id} href={`#${id}`} active={activeSection === id}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            )}
          </StyledNav>
        </Middle>
        <Right>
          <SideIcons>
            <NavButton onClick={openSideDrawer}>
              <img src={ham} alt="hamburger" />
            </NavButton>
          </SideIcons>
          <div className="hide">
            <Button bg="#2B2320" color="#FFFFFF" text="Get in Touch" />
          </div>
        </Right>
      </Wrapper>
    </StyledHeader>
  );
}

export default Navbar;
