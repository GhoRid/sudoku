import { useState } from "react";
import Board from "../components/Board";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import FuntionList from "../components/FuntionList";
import Text from "../components/atoms/Text";
import NumberList from "../components/NumberList";
import PauseModal from "./../components/PauseModal";
import Loader from "../components/Loader";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const MainLogo = styled.div`
  font-size: 30px;
`;

const StateBarContiner = styled.div`
  margin: 30px 0 10px 0;
  color: ${(props) => props.theme.colors.grey};
  display: flex;
  justify-content: space-between;
`;

const Difficulty = styled.div``;

const Mistakes = styled.div`
  text-align: center;
`;
const Timer = styled.div`
  text-align: end;
`;

const Game = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <TopContainer>
        <button
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
        </button>
        <MainLogo>Sudoku</MainLogo>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
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
        </button>
      </TopContainer>
      <StateBarContiner>
        <Difficulty>
          <Text $fontSize="10px">난이도</Text>
          <Text $fontSize="16px">마스터</Text>
        </Difficulty>
        <Mistakes>
          <Text $fontSize="10px">실수</Text>
          <Text $fontSize="16px">0/3</Text>
        </Mistakes>
        <Timer>
          <Text $fontSize="10px">시간</Text>
          <Text $fontSize="16px">00:00</Text>
        </Timer>
      </StateBarContiner>
      <Board></Board>
      <FuntionList />
      <NumberList />
      <PauseModal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen((prev) => !prev);
        }}
      ></PauseModal>
    </Container>
  );
};

export default Game;
