import React from "react";
import styled from "styled-components";
import one from "../../assets/icons/Frame 1171280413.svg";
import two from "../../assets/icons/Frame 11712804131.svg";
import three from "../../assets/icons/Frame 1171280413 (1).svg";
import four from "../../assets/icons/Frame 1171280413 (2).svg";
import five from "../../assets/icons/Frame 1171280413 (3).svg";
import six from "../../assets/icons/Frame 1171280413 (4).svg";
import seven from "../../assets/icons/Frame 1171280413 (5).svg";
import eight from "../../assets/icons/Frame 1171280495.svg";
import nine from "../../assets/icons/Frame 1171280496.svg";
import ten from "../../assets/icons/Frame 1171280496 (1).svg";
import eleven from "../../assets/icons/Frame 1171280495 (1).svg";

const Wrapper = styled.div`
  margin: 6rem 0 0 0;
  padding: 1rem 0 7rem 0;
  background-color: ${({ theme }) => theme.background};

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:80%;
    margin:0 auto;
    gap:3rem;
    @media screen and (max-width: 900px) {
        gap:1rem;
        width:90%;
    }
    img{
        width:130px;
        height:122px;
        @media screen and (max-width: 900px) {
            width:70px;
            height:80px;   
        }
    }
  }
`;

function Stack() {
  return (
    <Wrapper id="stack">
      <div className="main-container">
        <p className="main-title">Skills/Tools</p>
        <p className="main-text">
          Highlighted skills and technologies i use to deliver exceptional
          experiences.
        </p>
      </div>
      <div className="wrap">
        <img src={one} alt="icons" />
        <img src={two} alt="icons" />
        <img src={three} alt="icons" />
        <img src={four} alt="icons" />
        <img src={eight} alt="icons" />
        <img src={nine} alt="icons" />
        <img src={five} alt="icons" />
        <img src={six} alt="icons" />
        <img src={seven} alt="icons" />
        <img src={ten} alt="icons" />
        <img src={eleven} alt="icons" />
      </div>
    </Wrapper>
  );
}

export default Stack;
