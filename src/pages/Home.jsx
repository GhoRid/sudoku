import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../theme";

const MainLogo = styled.div`
  display: flex;
  font-size: 60px;
  justify-content: center;
`;

const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  font-size: 20px;
  width: 50%;
  margin: 90% auto 0;
  border: none;
  border-radius: 40px;
  background-color: ${(props) => props.theme.color.blue};
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainLogo>sudoku</MainLogo>
      <StartBtn
        onClick={() => {
          navigate("/game");
        }}
      >
        시작하기
      </StartBtn>
      <ul>
        <li>게임방법</li>
        <li>랭킹</li>
      </ul>
    </div>
  );
};

export default Home;
