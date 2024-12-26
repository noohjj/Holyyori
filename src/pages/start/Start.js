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
  border-radius: 20px;
  background-color: #f4ddc0;
  padding: 20px;
`;

const IconWrap = styled.div``;

const PointWrap = styled.div``;

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
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const RecipeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  padding: 10px;
`;

// HTML에서 요약 정보 추출 함수
const extractSummary = (content) => {
  if (!content) return "요약 정보 없음"; // content가 없을 경우 기본값 반환
  const cleanContent = content
    .replace(/<br>/g, "\n")
    .replace(/(<([^>]+)>)/gi, "");
  const summary = cleanContent.split("||")[1]?.trim(); // 두 번째 섹션 추출
  return summary ? summary.split(".")[0] + "..." : "요약 정보 없음";
};

const Start = () => {
  const [yori, setYori] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await YoriData(); // API 데이터 호출
        const processedData = data.map((item) => ({
          title: item.title || "제목 없음", // title이 없을 경우 기본값
          image: item.image || "https://via.placeholder.com/150", // 이미지가 없을 경우 기본값
          summary: extractSummary(item.content), // 요약 정보 추출
        }));
        setYori(processedData);
      } catch (error) {
        console.log("API 호출 에러:", error);
      }
    })();
  }, []);

  return (
    <Wrap>
      <LevelWrap>
        <IconWrap></IconWrap>
        <PointWrap></PointWrap>
      </LevelWrap>
      <h3>추천 요리</h3>
      <ConWrap>
        {yori.map((item, index) => (
          <Con key={index}>
            <RecipeImage src={item.image} alt={item.title} />
            <RecipeTitle>{item.title}</RecipeTitle>
            <p>{item.summary}</p>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

export default Start;
