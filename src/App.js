import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Layout from "./components/Layout";
import { Reset } from "styled-reset";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
