import styled from "styled-components";
import secondLevel from "../image/lv2.png";

const LevelImage2 = styled.img`
  width: 100px;
  height: auto;
`;

const Level2 = () => {
  return <LevelImage2 src={secondLevel} />;
};

export default Level2;
