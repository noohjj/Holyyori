import { useEffect, useState } from "react";
import { YoriData } from "../../api";
import styled from "styled-components";

const Wrap = styled.div``;

const LevelWrap = styled.div``;

const IconWrap = styled.div``;

const Start = () => {
  const [yori, setYori] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const yori = await YoriData();
        setYori(yori);
        console.log(yori);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Wrap>
      <LevelWrap>
        <IconWrap></IconWrap>
      </LevelWrap>
    </Wrap>
  );
};

export default Start;
