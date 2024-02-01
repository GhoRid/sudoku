import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const LayOutBox = styled.div`
  width: 390px;
  height: 100vh;
  height: 844px;
  overflow: auto;
  position: relative;
  background-color: grey;

  margin: 0 auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Layout = () => {
  return (
    <LayOutBox className="layout">
      <Outlet />
    </LayOutBox>
  );
};

export default Layout;
