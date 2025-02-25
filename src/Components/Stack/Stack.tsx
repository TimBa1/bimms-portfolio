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
import { motion } from "framer-motion";

const Wrapper = styled.div`
  margin: 6rem 0 0 0;
  padding: 1rem 0 7rem 0;
  background-color: ${({ theme }) => theme.background};

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
    gap: 3rem;
    @media screen and (max-width: 900px) {
      gap: 1rem;
      width: 90%;
    }
    img {
      width: 130px;
      height: 122px;
      @media screen and (max-width: 900px) {
        width: 70px;
        height: 80px;
      }
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" }
  }
};

const iconsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 } // Increased stagger delay for clarity
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { scale: 1.2, transition: { duration: 0.3 } }
};

const icons = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven
];

function Stack() {
  return (
    <Wrapper id="stack">
      {/* Section Animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="main-container">
          <motion.p
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills/Tools
          </motion.p>
          <motion.p
            className="main-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Highlighted skills and technologies I use to deliver exceptional
            experiences.
          </motion.p>
        </div>
      </motion.div>

      {/* Icons Animation */}
      <motion.div
        className="wrap flex flex-wrap justify-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={iconsContainerVariants}
      >
        {icons.map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt="icon"
            className="w-16 h-16"
            variants={iconVariants}
            whileHover="hover"
          />
        ))}
      </motion.div>
    </Wrapper>
  );
}

export default Stack;
