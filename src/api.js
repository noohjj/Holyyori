const fetch = require("node-fetch");

const baseUrl = "https://api.odcloud.kr/api/15050910";
const udDi = "69d46184-9441-4d4d-9c3f-e4de66a49643_201909261053";
const apiKey =
  "1l64t6Bdj%2FETCziwk1dAKNoPCXX%2BU77BE9UDSsFYQmEfO7%2Be79daO3HTK5T6dFPGIB9PNzP7%2BJlqq1j3YbcBiA%3D%3D";

const allUrl = `${baseUrl}/v1/uddi:${udDi}?page=1&perPage=1000&returnType=json&serviceKey=${apiKey}`;

export const YoriData = () => {
  return fetch(allUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status}`); // HTTP 상태 코드 에러 처리
      }
      return res.json();
    })
    .then((data) => {
      console.log("API 데이터:", data); // API 응답 데이터 출력
      return data; // 응답 데이터 반환
    })
    .catch((error) => {
      console.log("API 호출 중 오류 발생:", error); // 오류 출력
      return { results: [] }; // 오류 발생 시 빈 배열 반환
    });
};
