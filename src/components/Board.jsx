import styled from "styled-components";
import Square from "./Cell";

const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px); // 3개의 열, 각 열은 100px
`;

const Board = () => {
  return (
    <BoardWrapper>
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </BoardWrapper>
  );
};

export default Board;
