import Modal from "react-modal";
import styled from "styled-components";
import Text from "./atoms/Text";

const ModalStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "320px",
    height: "440px",
    zIndex: "150",
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    backgroundColor: "white",
  },
};

const PauseLogoContainer = styled.div`
  width: 100%;
  text-align: center;
  line-height: 80px;
  height: 80px;
  border-bottom: 1px solid grey;
`;

const ResumeButton = styled.button`
  width: 270px;
  height: 40px;
  border-radius: 40px;
  background-color: black;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  margin: 32px 0 0 12px;
`;

const PauseModal = ({ isOpen, onRequestClose }) => {
  Modal.setAppElement(document.getElementById("root"));

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={ModalStyles}>
      <PauseLogoContainer>
        <Text $fontSize="32px">일시 정지</Text>
      </PauseLogoContainer>
      <TextContainer>
        <Text $fontSize="20px" fontColor="grey">
          난이도
        </Text>
        <Text $fontSize="32px">마스터</Text>
      </TextContainer>
      <TextContainer>
        <Text $fontSize="20px" fontColor="grey">
          실수
        </Text>
        <Text $fontSize="32px">0/3</Text>
      </TextContainer>
      <TextContainer>
        <Text $fontSize="20px" fontColor="grey">
          시간
        </Text>
        <Text $fontSize="32px">00:00</Text>
      </TextContainer>
      <ResumeButton onClick={onRequestClose}>
        <Text $fontSize="20px" fontColor="white">
          다시 시작하기
        </Text>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 10.2679C20.3333 11.0377 20.3333 12.9623 19 13.7321L10 18.9282C8.66667 19.698 7 18.7358 7 17.1962L7 6.80385C7 5.26425 8.66667 4.302 10 5.0718L19 10.2679Z"
            stroke="#F9F9F9"
            stroke-width="2.5"
            stroke-linejoin="round"
          />
        </svg>
      </ResumeButton>
    </Modal>
  );
};

export default PauseModal;
