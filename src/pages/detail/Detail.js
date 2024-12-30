import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { YoriData } from "../../api";

const Wrap = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const Detail = () => {
  const { recipeName } = useParams(); // URL의 요리 이름 가져오기
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await YoriData(); // API 데이터 호출
        const foundRecipe = data.find((item) => item.제목 === recipeName); // 요리 이름으로 데이터 찾기
        setRecipe(foundRecipe || null);
      } catch (error) {
        console.error("API 호출 에러:", error);
      }
    })();
  }, [recipeName]);

  return (
    <Wrap>
      {recipe ? (
        <>
          <Title>{recipe.제목}</Title>
          <Content>{recipe.내용}</Content>
        </>
      ) : (
        <p>요리를 찾을 수 없습니다.</p>
      )}
    </Wrap>
  );
};

export default Detail;
