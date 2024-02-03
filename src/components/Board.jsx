import styled from "styled-components";
import Square from "./Square";

const BoardWrapper = styled.div`
  width: 360px;
  height: 360px;
  background-color: skyblue;

  display: grid;
  grid-template-columns: repeat(3, 120px);
  border: 1px solid black;
`;

const Board = () => {
  const randomList = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 9)
  );

  return (
    <BoardWrapper>
      {randomList.map((number, index) => {
        return <Square key={index} number={number} />;
      })}
    </BoardWrapper>
  );
};

export default Board;
