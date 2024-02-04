import { styled } from "styled-components";

const Container = styled.p`
  margin-top: 4px;
  font-size: ${(props) => props.$fontSize};
`;

const Text = ({ children, $fontSize }) => {
  return <Container $fontSize={$fontSize}>{children}</Container>;
};

export default Text;
