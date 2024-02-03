import { useState } from "react";
import Board from "../components/Board";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: white;
  border: none;
`;

const MainLogo = styled.div`
  font-size: 30px;
`;

const StateBarContiner = styled.div`
  margin-top: 20px;
  color: ${(props) => props.theme.colors.grey};
`;

const Game = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Top>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_163)">
              <path
                d="M14 7L9 12"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 12L14 17"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_163">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
        <MainLogo>Sudoku</MainLogo>
        <Button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4_153)">
              <path
                d="M5 7C5 5.89543 5.89543 5 7 5H8C9.10457 5 10 5.89543 10 7V17C10 18.1046 9.10457 19 8 19H7C5.89543 19 5 18.1046 5 17V7Z"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
              <path
                d="M14 7C14 5.89543 14.8954 5 16 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H16C14.8954 19 14 18.1046 14 17V7Z"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_153">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </Top>
      <StateBarContiner>dd</StateBarContiner>
      <Board></Board>
    </Container>
  );
};

export default Game;
