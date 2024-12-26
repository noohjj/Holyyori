import styled from "styled-components";
import firstLevel from "../image/lv1.png";

const LevelImage1 = styled.img`
  width: 100px;
  height: auto;
`;

const Level1 = () => {
  return <LevelImage1 src={firstLevel} alt="level1" />;
};

export default Level1;
