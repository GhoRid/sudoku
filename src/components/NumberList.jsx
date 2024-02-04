import styled from "styled-components";
import Text from "./atoms/Text";

const Container = styled.div`
  width: 360px;
  margin-top: 60px;
`;

const NumberButton = styled.button`
  width: 40px;
  height: 40px;
`;

const NumberList = () => {
  const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      {numList.map((number, index) => {
        return (
          <NumberButton
            onClick={() => {
              console.log(number);
            }}
            key={index}
          >
            <Text $fontSize="30px">{number}</Text>
          </NumberButton>
        );
      })}
    </Container>
  );
};

export default NumberList;
