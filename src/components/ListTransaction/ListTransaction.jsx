import { Button } from "../Button/Button";
import trash from "../../assets/trash.svg";
import "../../styles/listTransactions.css";

export const ListTransactions = ({ list, delet }) => {
  return (
    <ul className="dspl-flex gap30 flex__direc-column">
      {list.map((transact, index) => (
        <li
          key={index} id={index}
          className="listTransac dspl-flex align__items-start flex__direc-column"
        >
          <div className="dspl-flex justy__cont-SB wFullPerc">
            <div>
              <h2 className="text4 font-w700">{transact.description}</h2>
            </div>
            <div className="dspl-flex justy__cont-SB align__items-center gap30">
              <p className="text5 font-w400">R$ {transact.value}</p>
              <Button nameObj={transact.id} delet={delet}>
                <img src={trash} alt="" />
              </Button>
            </div>
          </div>
          <p className="text5 font-w400">{transact.type}</p>
        </li>
      ))}
    </ul>
  );
};
