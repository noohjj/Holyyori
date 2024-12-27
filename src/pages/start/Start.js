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
`;

const extractImageFromContent = (htmlContent) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const imgTag = doc.querySelector("img");

    // 이미지 태그가 있으면 src 반환, 없으면 기본 이미지 반환
    return imgTag && imgTag.src
      ? imgTag.src
      : "https://via.placeholder.com/150";
  } catch (error) {
    console.error("이미지 추출 중 에러:", error);
    return "https://via.placeholder.com/150"; // 기본 이미지
  }
};

const Start = () => {
  const [yori, setYori] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await YoriData(); // API 데이터 호출
        const processedData = data.map((item) => ({
          title: item.제목 || "제목 없음",
          image: extractImageFromContent(item.내용), // 내용에서 이미지 추출
        }));
        setYori(processedData);
      } catch (error) {
        console.log("API 호출 에러:", error);
      }
    })();
  }, []);

  return (
    <Wrap>
      <h3>추천 요리</h3>
      <ConWrap>
        {yori.length > 0 ? (
          yori.map((item, index) => (
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
