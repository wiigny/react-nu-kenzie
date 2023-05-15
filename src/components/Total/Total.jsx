import "../../styles/total.css";

export const Total = ({ count }) => {
  return (
    <div
      id="divTotal"
      className="dspl-flex align__items-start flex__direc-column"
    >
      <div className="dspl-flex justy__cont-SB align__items-center wFullPerc">
        <h2>Valor Total:</h2> <span className="text4 font-w700">$ {count}</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
