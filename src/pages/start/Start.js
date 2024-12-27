import { useEffect, useState } from "react";
import { YoriData } from "../../api";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 20px 20px;
  h3 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
  }
`;

const LevelWrap = styled.div`
  width: 100%;
  max-width: 410px;
  height: 220px;
  background-color: #f6cd9a;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const PointWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

const PointText = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Lev = styled.div`
  font-size: 36px;
  font-weight: bold;
`;

const YoriPoint = styled.div`
  font-size: 16px;
  letter-spacing: 0.3;
  font-family: "Cantata One", serif;
`;

const Level = styled.div`
  width: 100%;
  max-width: 180px;
  height: 100%;
  max-height: 180px;
  background-color: white;
  position: relative;
  border-radius: 20px;
`;

const ConWrap = styled.div`
  margin-top: 20px;
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
`;

const RecipeImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px; /* 필요 시 테두리 둥글게 */
  margin: 0 auto; /* 가운데 정렬 */
`;

const RecipeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  padding: 10px;
  margin-top: 10px;
`;

const Start = () => {
  const [yori, setYori] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await YoriData(); // API 데이터 호출
        console.log("API 데이터:", data); // API 데이터 구조 확인
        const processedData = data.map((item) => ({
          title: item.제목 || "제목 없음",
          image: item.이미지 || "https://via.placeholder.com/150",
          content: item.내용 || "내용 없음",
        }));
        setYori(processedData);
      } catch (error) {
        console.log("API 호출 에러:", error);
      }
    })();
  }, []);

  const randomItems = yori.sort(() => 0.5 - Math.random()).slice(0, 6); // 랜덤으로 6개만 추출

  return (
    <Wrap>
      <LevelWrap>
        <Level></Level>
        <PointWrap>
          <PointText>당신의 요리 레벨은</PointText>
          <Lev>LV.1</Lev>
          <YoriPoint>YORI POINT : 2000</YoriPoint>
        </PointWrap>
      </LevelWrap>
      <h3>추천 요리</h3>
      <ConWrap>
        {randomItems.length > 0 ? (
          randomItems.map((item, index) => (
            <Con key={index}>
              <RecipeImage src={item.image} alt={item.title} />
              <RecipeTitle>{item.title}</RecipeTitle>
            </Con>
          ))
        ) : (
          <p>추천 요리가 없습니다.</p>
        )}
      </ConWrap>
    </Wrap>
  );
};

export default Start;
