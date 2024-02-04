import styled from "styled-components";
import Text from "./atoms/Text";

const Funtions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  text-align: center;
`;

const FuntionList = () => {
  return (
    <Funtions>
      <div>
        <button
          onClick={() => {
            console.log("되돌리기");
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="white" />
            <g clip-path="url(#clip0_3_177)">
              <path
                d="M20 12.9999C24.9706 12.9999 29 17.0293 29 21.9999C29 26.9704 24.9706 30.9999 20 30.9999C15.0294 30.9999 11 26.9704 11 21.9999C11 19.1726 12.3037 16.6498 14.3427 14.9999"
                stroke="#292929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 14.4999H15V18.4999"
                stroke="#292929"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_177">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(8 10)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <Text fontSize="20px">되돌리기</Text>
      </div>
      <div>
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="white" />
            <g clip-path="url(#clip0_4_78)">
              <path
                d="M22 20V26"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 20V26"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 16V28C14 29.1046 14.8954 30 16 30H24C25.1046 30 26 29.1046 26 28V16"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16H28"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 16L17 12H23L25 16"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_78">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(8 9)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <Text fontSize="20px">지우기</Text>
      </div>
      <div>
        <button>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="white" />
            <g clip-path="url(#clip0_4_59)">
              <path
                d="M13 24L12 28L16 27L27.5858 15.4142C28.3668 14.6332 28.3668 13.3668 27.5858 12.5858L27.4142 12.4142C26.6332 11.6332 25.3668 11.6332 24.5858 12.4142L13 24Z"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 14L26 17"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 28H29"
                stroke="#292929"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4_59">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(8 8)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <Text fontSize="20px">메모</Text>
      </div>
    </Funtions>
  );
};

export default FuntionList;
