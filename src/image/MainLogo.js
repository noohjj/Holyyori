import styled from "styled-components";
import React from "react";
import logoImage from "../image/KakaoTalk_20241220_141204377.png";

const LogoImage = styled.img`
  width: 200px;
  height: auto;
`;
const MLogo = () => {
  return <LogoImage src={logoImage} alt="logo" />;
};

export default MLogo;
