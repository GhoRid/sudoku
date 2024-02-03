import Cell from "./Cell";

const Square = ({ board, onClick }) => {
  return (
    <div onClick={onClick}>
      <Cell />
    </div>
  );
};

export default Square;
