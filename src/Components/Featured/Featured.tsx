import React from "react";
import styled from "styled-components";
import agric from "../../assets/icons/agric.svg";
import { Features } from "../Data";

const Wrapper = styled.div`
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .box {
    background-color: ${({ theme }) => theme.card};
    display: flex;
    border-radius: 5px;
    padding: 30px 40px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
    @media screen and (max-width: 900px) {
      flex-direction: column;
      padding:10px 10px;
    }
  }

 
  .box.reverse {
    flex-direction: row-reverse;
    
    @media screen and (max-width: 900px) {
      /* For mobile, we override the reverse by going back to column */
      flex-direction: column;
    }
  }

 
  .left {
    width: 50%;
    @media screen and (max-width: 900px) {
      width: 100%;
      order: 2; /* Place left below right on mobile */
    }
    .company {
      font-size: 25px;
      font-weight: 600;
      margin: 0;
      text-transform: uppercase;
      color: ${({ theme }) => theme.main};
      @media screen and (max-width: 900px) {
        font-size: 18px;
        margin-top:1rem;
      }
    }
    .role {
      font-size: 20px;
      font-weight: 600;
      margin: 2rem 0 20px 0;
      @media screen and (max-width: 900px) {
        font-size: 16px;
        margin: 1rem 0 12px 0;
      }
    }
    .desc {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
      @media screen and (max-width: 900px) {
        font-size: 14px;
        font-weight: 400;
      }
    }
    .stack {
      margin: 2rem 0;
      display: flex;
      gap: 1rem;
      flex-wrap:wrap;
      @media screen and (max-width: 900px) {
        margin:1.5rem 0;
      }
    }
    .but {
      background-color: rgba(209, 209, 209, 0.3);
      padding: 10px 25px;
      border-radius: 10px;
      font-size: 20px;
      font-weight: 600;
      @media screen and (max-width: 900px) {
        font-size: 14px;
        font-weight: 500;
      }
    }
    .link {
      display: flex;
      gap: 3rem;
      a {
        color: ${({ theme }) => theme.main};
      }
    }
  }

  .right {
    @media screen and (max-width: 900px) {
      order: 1; /* Force right to always be at the top on mobile */
      width: 100%;
    }
    img {
      height: 350px;
      @media screen and (max-width: 900px) {
        height: auto; /* Adjust as needed */
        width: 100%;
      }
    }
  }
`;

function Featured() {
  return (
    <Wrapper id="featured">
      <div className="main-container">
        <p className="main-title">Featured Work</p>
        <p className="main-text">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favourites.
        </p>
      </div>

      <div className="container">
        {Features.map((s: any, index: number) => (
          // Add the "reverse" class for every other item on desktop
          <div className={`box ${index % 2 !== 0 ? "reverse" : ""}`} key={s.id}>
            <div className="left">
              <h4 className="company">{s.company}</h4>
              <h5 className="role">{s.role}</h5>
              <h6 className="desc">{s.description}</h6>
              <div className="stack">
                {s.stack.map((tr: any) => (
                  <span key={tr} className="but">
                    {tr}
                  </span>
                ))}
              </div>
              <div className="link">
                <a href="#">Github</a>
                <a href="#">View Site</a>
              </div>
            </div>
            <div className="right">
              <img src={agric} alt="agric" />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Featured;
