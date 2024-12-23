import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  max-width: 450px;
  background-color: #292e41;
  padding: 0 ${mainStyle.moPadding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-family: "Cantata One", serif;
`;

const Quiz = styled.div`
  font-size: 15px;
`;

const MainText = styled.h3`
  font-size: 30px;
`;

const SearchIcon = styled.div`
  font-size: 25px;
`;
const Header = () => {
  return (
    <Wrap>
      <Link to="/quiz">
        <Quiz>Quiz</Quiz>
      </Link>
      <Link to="/start">
        <MainText>HOLY YORI</MainText>
      </Link>
      <Link to="/search">
        <SearchIcon>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </SearchIcon>
      </Link>
    </Wrap>
  );
};

export default Header;
