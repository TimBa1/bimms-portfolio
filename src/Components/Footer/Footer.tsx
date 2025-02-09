import React from "react";
import styled from "styled-components";
import twi from "../../assets/icons/mdi_twitter.svg";
import link from "../../assets/icons/mdi_linkedin.svg";
import mail from "../../assets/icons/ic_baseline-email.svg";
import git from "../../assets/icons/mdi_github.svg";
import Button from "../Button";

const Foot = styled.div`
  background-color: ${({ theme }) => theme.button};
  padding: 50px 0;
  @media screen and (max-width: 900px) {
    padding: 20px 0;
  }
  .top {
    display: flex;
    width: 85%;
    margin: 0 auto;
    align-items: center;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      width: 90%;
      align-items: flex-start;
    }
    .logo {
      margin-right: 8rem;
      @media screen and (max-width: 900px) {
        margin-right: 0;
        margin-bottom: 1rem;
      }
      img {
        height: 70px;
      }
    }
    .links {
      display: flex;
      gap: 4rem;
      font-size: 16px;
      @media screen and (max-width: 900px) {
        width: 100%;
        gap: 1rem;
      }
    }
  }
  .middle {
    height: 1px;
    background-color: white;
    width: 100%;
    margin: 1rem 0;
  }
  .bottom {
    font-size: 14px;
    width: 85%;
    margin: 0 auto;
    padding-top: 2rem;
    color: white;
    text-align: center;
    @media screen and (max-width: 900px) {
      padding: 0;
    }
  }
  .buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
  }
  .link {
    display: flex;
    gap: 1rem;
    align-items: Center;
    justify-content: Center;
    margin-top: 3rem;
    @media screen and (max-width: 900px) {
      margin-top: 2rem;
       margin-bottom:1rem;
    }
  }
  .close {
    width: 68% !important;
     margin:0 auto;
    @media screen and (max-width: 900px) {
      width: 100%;
     
    }
  }
`;

function Footer() {
  return (
    <Foot>
      <div className="main-container">
        <p className="main-title" style={{ color: "white" }}>
          Lets Collaborate
        </p>
        <div className="close">
          <p className="main-text close" style={{ color: "white" }}>
            Always up for new challenges and down to collaborate at any time
            Want to get in touch ? Hit me up ✌🏻
          </p>
        </div>
      </div>
      <div className="buttons">
        <Button bg="white" color="#2B2320" text="Send Email" />
        <Button bg="#2B2320" color="#FFFFFF" border="white" text="Let's Talk" />
      </div>
      <div className="link">
        <a href="">
          <img src={link} alt="socials" />
        </a>
        <a href="">
          <img src={git} alt="socials" />
        </a>
        <a href="">
          <img src={mail} alt="socials" />
        </a>
        <a href="">
          <img src={twi} alt="socials" />
        </a>
      </div>
      <div className="bottom">Copyright@2024 Portfolio - Timba Services</div>
    </Foot>
  );
}

export default Footer;
