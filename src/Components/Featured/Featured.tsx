import React from "react";
import styled from "styled-components";
import agric from "../../assets/icons/agric.svg";
import { Features } from "../Data";
import { motion } from "motion/react";

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
      padding: 10px 10px;
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
        margin-top: 1rem;
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
      flex-wrap: wrap;
      @media screen and (max-width: 900px) {
        margin: 1.5rem 0;
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
    width:45%;
    
    @media screen and (max-width: 900px) {
      order: 1; /* Force right to always be at the top on mobile */
      width: 100%;
    }
    img {
      height: 350px;
      width:100%;
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="main-container">
          <motion.p
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Work
          </motion.p>
          <motion.p
            className="main-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </motion.p>
        </div>

        <div className="container">
          {Features.map((s: any, index: number) => (
            <motion.div
              key={s.id}
              className={`box ${index % 2 !== 0 ? "reverse" : ""}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2
              }}
              viewport={{ once: true }}
            >
              <div className="left">
                <motion.h4
                  className="company"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {s.company}
                </motion.h4>
                <motion.h5
                  className="role"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {s.role}
                </motion.h5>
                <motion.h6
                  className="desc"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {s.description}
                </motion.h6>
                <motion.div
                  className="stack"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {s.stack.map((tr: any) => (
                    <motion.span
                      key={tr}
                      className="but"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {tr}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  className="link"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <a href="#">Github</a>
                  <a href="#">View Site</a>
                </motion.div>
              </div>

              <motion.div
                className="right"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                <img src={s.img} alt="agric" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Wrapper>
  );
}

export default Featured;
