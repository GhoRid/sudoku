import { useState } from "react";
import Board from "../components/Board";

const Game = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Board></Board>
    </div>
  );
};

export default Game;
