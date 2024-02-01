import { useState } from "react";

const Game = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return isLoading ? <div>로딩중...</div> : <div>게임화면</div>;
};

export default Game;
