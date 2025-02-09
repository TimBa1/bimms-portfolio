import React from "react";
import styled from "styled-components";
import { Experiences } from "../Data";

const Wrapper = styled.div`
  .container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media screen and (max-width: 900px) {
        width:90%;
        gap:2.5rem;
    }
  }
  .head-cont {
    display: flex;
    justify-content: Space-between;
    @media screen and (max-width:900px){
        flex-direction:column;
    }
  }
  .left {
  
   
    h1 {
      margin: 0;
      font-size: 50px;
      font-weight: 700;
      @media screen and (max-width: 900px) {
        font-size:30px;
        font-weight:500;
      }
    }
  }
  .right { 
     width: 88%;
     @media screen and (max-width: 900px) {
        width:100%;
     }
    .head {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 900px) {
        flex-direction: column;
      }
    }
    .company {
      font-size: 25px;
      font-weight: 600;
      margin-bottom:10px;
      @media screen and (max-width: 900px) {
        font-size:16px;
        margin-top:13px;
      }
    }
    .role {
      font-size: 20px;
      font-weight: 400;
      @media screen and (max-width: 900px) {
        font-size:14px;

      }
    }
    .date {
      border: 1px solid black;
      padding: 5px 30px;
      height: 45px;
      font-size: 17px;
      font-weight: 500;
      border-radius: 10px;
      background-color: white;
      @media screen and (max-width: 900px) {
        font-size:11px;
        height: 24px;
        padding:0 15px;
        width:fit-content;
        margin-top:10px;
      }
    }
    .box {
      margin-top: 2rem;
      border: 1px solid black;
      padding: 30px;
      font-size: 18px;
      border-radius: 10px;
      @media screen and (max-width: 900px) {
        font-size:14px;
        padding:15px;
      }
      .p {
        font-size: 20px;
        font-weight: 600;
        @media screen and (max-width: 900px) {
            font-size:16px;
            font-weight:500;
        }
      }
    }
  }
`;

function Experience() {
  return (
    <Wrapper id='experience'>
      <div className="main-container">
        <p className="main-title">Work Experience</p>
        <p className="main-text">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favourites.
        </p>
      </div>
      <div className="container">
        {Experiences.map((s: any) => (
          <div className="head-cont" key={s.id}>
            <div className="left">
              <h1>0{s.id}</h1>
            </div>
            <div className="right">
              <div className="head">
                <div className="sub-menu">
                  <div className="company">{s.company}</div>
                  <div className="role">{s.role}</div>
                </div>
                <button className="date">{s.duration}</button>
              </div>
              <div className="box">
                <p className="p">Description</p>
                <p> {s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default Experience;
