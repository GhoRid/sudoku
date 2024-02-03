import { styled } from "styled-components";

const Container = styled.button`
  background-color: white;
  border: none;
`;

const Button = ({ children, onClick }) => {
  return <Container onClick={onClick}>{children}</Container>;
};

export default Button;
