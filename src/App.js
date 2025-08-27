import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MY-APP" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

//url에 따라 보여주는 창 만들기
