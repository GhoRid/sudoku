const makeBoard = () => {
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(Array(9).fill(0));
  }
};

export default makeBoard;
