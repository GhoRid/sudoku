import styled from "styled-components";

const Box = styled.button`
  width: 40px;
  height: 40px;
  border: 0.5px solid grey;
  background-color: white;
`;

const Cell = ({ number }) => {
  return (
    <Box
      onClick={() => {
        console.log(number);
      }}
    >
      {number}
    </Box>
  );
};

export default Cell;
