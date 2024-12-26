import styled from "styled-components";
import thirdLevel from "../image/lv3.png";

const LevelImage3 = styled.img`
  width: 100px;
  height: auto;
`;

const Level3 = () => {
  return <LevelImage3 src={thirdLevel} />;
};

export default Level3;
