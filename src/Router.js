import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Start from "./pages/start/Start";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
