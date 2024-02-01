import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const MainLogo = styled.div`
  display: flex;
  font-size: 60px;
  justify-content: center;
  margin: 20% auto 0;
`;

const StartBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 70%;
  height: 40px;
  margin: 90% auto 0;
  border: none;
  border-radius: 40px;
  color: white;
  background-color: ${(props) => props.theme.colors.blue};
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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10.2679C20.3333 11.0377 20.3333 12.9623 19 13.7321L10 18.9282C8.66667 19.698 7 18.7358 7 17.1962L7 6.80385C7 5.26425 8.66667 4.302 10 5.0718L19 10.2679Z"
            stroke="#F9F9F9"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
        </svg>
      </StartBtn>
    </div>
  );
};

export default Home;
