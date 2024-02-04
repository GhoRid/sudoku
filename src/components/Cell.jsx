import styled from "styled-components";
import Text from "./atoms/Text";

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
      <Text $fontSize="20px">{number}</Text>
    </Box>
  );
};

export default Cell;
