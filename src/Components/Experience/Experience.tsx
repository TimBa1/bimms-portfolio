import React from "react";
import styled from "styled-components";
import { Experiences } from "../Data";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  .container {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media screen and (max-width: 900px) {
      width: 90%;
      gap: 2.5rem;
    }
  }
  .head-cont {
    display: flex;
    justify-content: Space-between;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }
  .left {
    h1 {
      margin: 0;
      font-size: 50px;
      font-weight: 700;
      @media screen and (max-width: 900px) {
        font-size: 30px;
        font-weight: 500;
      }
    }
  }
  .right {
    width: 88%;
    @media screen and (max-width: 900px) {
      width: 100%;
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
      margin-bottom: 10px;
      @media screen and (max-width: 900px) {
        font-size: 16px;
        margin-top: 13px;
      }
    }
    .role {
      font-size: 20px;
      font-weight: 400;
      @media screen and (max-width: 900px) {
        font-size: 14px;
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
        font-size: 11px;
        height: 24px;
        padding: 0 15px;
        width: fit-content;
        margin-top: 10px;
      }
    }
    .box {
      margin-top: 2rem;
      border: 1px solid black;
      padding: 30px;
      font-size: 18px;
      border-radius: 10px;
      @media screen and (max-width: 900px) {
        font-size: 14px;
        padding: 15px;
      }
      .p {
        font-size: 20px;
        font-weight: 600;
        @media screen and (max-width: 900px) {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
    .desc {
      display: flex;
      flex-direction: column;
      row-gap: 0.6rem;
    }
    .dot {
      margin-right: 1rem;
    }
    .cont {
      display: flex;
    }
  }
`;

const experienceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const descriptionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 } }
};

function Experience() {
  return (
    <Wrapper id="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="main-container">
          <motion.p className="main-title" variants={textVariants}>
            Work Experience
          </motion.p>
          <motion.p className="main-text" variants={textVariants}>
            I've worked on a variety of projects, from simple websites to
            complex web applications.
          </motion.p>
        </div>

        <div className="container">
          {Experiences.map((s: any) => (
            <motion.div
              key={s.id}
              className="head-cont"
              variants={experienceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="left"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1>0{s.id}</h1>
              </motion.div>

              <motion.div className="right">
                <motion.div className="head" variants={textVariants}>
                  <div className="sub-menu">
                    <motion.div className="company">{s.company}</motion.div>
                    <motion.div className="role">{s.role}</motion.div>
                  </div>
                  <motion.button className="date">{s.duration}</motion.button>
                </motion.div>

                <motion.div className="box" variants={descriptionVariants}>
                  <p className="p">Description</p>
                  <div className="desc">
                    {s?.description?.map((tr: any, i: number) => (
                      <motion.div
                        className="cont"
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <div className="dot">•</div>
                        <div>{tr}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
}

export default Experience;
