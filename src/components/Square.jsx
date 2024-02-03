import styled from "styled-components";
import Cell from "./Cell";

const SquareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 40px);
`;

const Square = () => {
  const randomList = Array.from({ length: 9 }, () =>
    Math.floor(Math.random() * 9)
  );
  console.log(randomList);

  return (
    <SquareWrapper>
      {randomList.map((number, index) => {
        return <Cell key={index} number={number} />;
      })}
    </SquareWrapper>
  );
};

export default Square;
