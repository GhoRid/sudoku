import styled from "styled-components";

const Box = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: grey;
`;

const Cell = (number) => {
  return <Box>{/* <p>{number}</p> */}</Box>;
};

export default Cell;
