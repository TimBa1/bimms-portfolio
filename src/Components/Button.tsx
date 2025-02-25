import React from "react";
import styled from "styled-components";

interface ButtonProps {
  color: string;
  bg: string;
  border?:string
}

const Buttons = styled.button<ButtonProps>`
  width: 160px;
  height: 47px;
  border-radius: 8px;
  color: ${(props) => props.color};
  border: ${(props) =>
    props.border
      ? `1px solid white`
      : `1px solid ${props.theme.button}`};
  background-color: ${(props) => props.bg};
  font-size: 20px;
  font-weight: 600;
  cursor:pointer;
`;

function Button({
  color,
  bg,
  text,
  border
}: {
  color: string;
  bg: string;
  text: string;
  border?:string;
}) {
  return <Buttons border={border} color={color} bg={bg}>{text}</Buttons>;
}

export default Button;
