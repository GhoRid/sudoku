import { useState } from "react";
import Board from "../components/Board";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import FuntionList from "../components/FuntionList";
import Text from "../components/atoms/Text";
import Top from "../components/Top";
import NumberList from "../components/NumberList";

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
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

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Top />
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
    </Container>
  );
};

export default Game;
