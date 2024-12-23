import styled from "styled-components";
import MLogo from "../../image/MainLogo";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SecWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const MainText = styled.div`
  color: #292e41;
  font-family: "Cantata One", serif;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SecText = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 0.5px;
`;
const Home = () => {
  return (
    <Wrap>
      <SecWrap>
        <Link to="/start">
          <MLogo />
        </Link>
        <MainText>HOLY YORI</MainText>
        <SecText>시작하시려면 아이콘을 클릭해주세요!</SecText>
      </SecWrap>
    </Wrap>
  );
};

export default Home;
