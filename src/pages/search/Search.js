import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { YoriData } from "../../api";

const Wrap = styled.div`
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Con = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
`;

const RecipeImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto;
`;

const RecipeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  padding: 10px;
  margin-top: 10px;
`;

const Message = styled.div`
  text-align: center;
  font-size: 16px;
  color: #777;
  margin-top: 20px;
`;

const Search = () => {
  const [yori, setYori] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await YoriData(); // API 데이터 호출
        const processedData = data.map((item) => ({
          title: item.제목 || "제목 없음",
          image: item.이미지 || "https://via.placeholder.com/150",
        }));
        setYori(processedData);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    })();
  }, []);

  useEffect(() => {
    // 검색어에 따른 데이터 필터링
    if (searchTerm.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = yori.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, yori]);

  return (
    <Wrap>
      <SearchBar
        type="text"
        placeholder="검색어를 입력해주세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // 검색어 상태 업데이트
      />
      <ConWrap>
        {searchTerm.trim() === "" ? (
          <Message>검색어를 입력해주세요</Message>
        ) : filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <Con key={index} onClick={() => navigate(`/detail/${item.title}`)}>
              <RecipeImage src={item.image} alt={item.title} />
              <RecipeTitle>{item.title}</RecipeTitle>
            </Con>
          ))
        ) : (
          <Message>검색 결과가 없습니다.</Message>
        )}
      </ConWrap>
    </Wrap>
  );
};

export default Search;
