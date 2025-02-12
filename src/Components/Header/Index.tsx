import React from "react";
import styled from "styled-components";
import me from "../../assets/icons/image (1).svg";
import Button from "../Button";

const Head = styled.div`
  background-color: ${({ theme }) => theme.background};
  height: 100vh;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 45px;
    font-weight: 700;
    text-align: center;
    p {
      margin: 0;
    }
    .p {
      color: ${({ theme }) => theme.main};
    }
  }

  .content {
    width: 63%;
    margin: 0 auto;
    margin: 1rem 0 2rem 0;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    span {
      font-size: 22px;
      font-weight: 600;
      color: ${({ theme }) => theme.main};
    }
  }
  .buttons {
    display: flex;
    gap: 15px;
  }

  @media screen and (max-width: 900px) {
    .title {
      font-size: 25px;
      font-weight: 600;
    }
    .content {
      width: 73%;
      font-size: 14px;
      font-weight: 500;
      span {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
`;

function Header() {
  return (
    <Head id="head">
      <img src={me} className="img" alt="passport" />

      <div className="title">
        <p>I am Abimbola a</p>
        <p className="p">Creative Developer</p>
      </div>
      <p className="content">
        As a <span>solution-driven Frontend Engineer</span> passionate about
        crafting intuitive and dynamic user experiences. Proficient in building
        responsive and high-performing web applications using JavaScript,
        React.js, and modern libraries, I bring a strong focus on delivering
        clean, efficient, and user-centered solutions."
      </p>
      <div className="buttons">
        <Button bg="#2B2320" color="#FFFFFF" text="Let's Talk" />
        <Button bg="transparent" color="#2B2320" text="Get Resume" />
      </div>
    </Head>
  );
}

export default Header;
