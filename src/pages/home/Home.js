import { useEffect, useState } from "react";
import { YoriData } from "../../api";

const Home = () => {
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
  return;
};

export default Home;
