import { styled } from "styled-components";

const Container = styled.p`
  font-size: ${(props) => props.$fontSize};
  color: ${(props) => props.fontColor || "black"};
`;

const Text = ({ children, $fontSize, fontColor }) => {
  return (
    <Container $fontSize={$fontSize} fontColor={fontColor}>
      {children}
    </Container>
  );
};

export default Text;
