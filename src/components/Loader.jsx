import styled, { keyframes } from "styled-components";

// Keyframes 정의
const lolAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-300px);
  }
  33% {
    opacity: 1;
    transform: translateX(0px);
  }
  66% {
    opacity: 1;
    transform: translateX(0px);
  }
  100% {
    opacity: 0;
    transform: translateX(300px);
  }
`;

// 스타일된 컴포넌트 정의
const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const LoaderInner = styled.div`
  position: absolute;
  width: calc(100% - 200px);
  color: #fff;
  padding: 0 100px;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
`;

const Label = styled.label`
  font-size: 20px;
  opacity: 0;
  display: inline-block;
  color: black;
`;

// 애니메이션 적용
const AnimatedLabel = styled(Label)`
  &:nth-child(1) {
    animation: ${lolAnimation} 3s 500ms infinite ease-in-out;
  }
  &:nth-child(2) {
    animation: ${lolAnimation} 3s 400ms infinite ease-in-out;
  }
  &:nth-child(3) {
    animation: ${lolAnimation} 3s 300ms infinite ease-in-out;
  }
  &:nth-child(4) {
    animation: ${lolAnimation} 3s 200ms infinite ease-in-out;
  }
  &:nth-child(5) {
    animation: ${lolAnimation} 3s 100ms infinite ease-in-out;
  }
  &:nth-child(6) {
    animation: ${lolAnimation} 3s infinite ease-in-out;
  }
`;

// Loader 컴포넌트
const Loader = () => {
  return (
    <LoaderWrapper className="cs-loader">
      <LoaderInner className="cs-loader-inner">
        <AnimatedLabel>●</AnimatedLabel>
        <AnimatedLabel>●</AnimatedLabel>
        <AnimatedLabel>●</AnimatedLabel>
        <AnimatedLabel>●</AnimatedLabel>
        <AnimatedLabel>●</AnimatedLabel>
        <AnimatedLabel>●</AnimatedLabel>
      </LoaderInner>
    </LoaderWrapper>
  );
};

export default Loader;
