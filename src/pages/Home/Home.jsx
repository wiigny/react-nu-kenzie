import { useEffect, useState } from "react";

import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Inputs/Input";
import { LiFilter } from "../../components/LiFilter/LiFilter";
import { ListTransactions } from "../../components/ListTransaction/ListTransaction";
import { NoCards } from "../../components/NoCards/NoCards";
import { Select } from "../../components/Select/Select";
import { Total } from "../../components/Total/Total";

import "./home.css";

export const Home = ({ setCheck }) => {
  const [listTransactions, setListTransactions] = useState([]);

  const [listFilter, setListFilter] = useState(listTransactions);

  const count = listFilter.reduce(
    (acc, cur) => (cur.type === "entrada" ? acc + cur.value : acc - cur.value),
    0
  );
  useEffect(() => {
    setListFilter(listTransactions);
  }, [listTransactions]);

  const filter = (string) => {
    let filtered = [];

    string == "Todos"
      ? setListFilter(listTransactions)
      : string == "Entradas"
      ? setListFilter(
          (filtered = listTransactions.filter((elt) => elt.type == "entrada"))
        )
      : setListFilter(
          (filtered = listTransactions.filter((elt) => elt.type == "saída"))
        );
  };

  const nameLi = ["Todos", "Entradas", "Despesas"];
  const listOption = ["Entrada", "Saída"];
  const [descrip, setDescrip] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const addTransac = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.random() * 10000000000000,
      description: descrip,
      type: type,
      value: parseFloat(value),
    };
    setListTransactions((previus) => [...previus, obj]);
    setListFilter((previus) => [...previus, obj]);
  };

  const delet = (id) => {
    setListTransactions(listTransactions.filter((elt) => elt.id !== id));
    setListFilter(listTransactions);
  };

  return (
    <>
      <Header setCheck={setCheck} />
      <main id="mainHome" className="dspl-flex justy__cont-SB gap40 container1">
        <section>
          <form
            action=""
            className="dspl-flex flex__direc-column align__items-start gap20"
            onSubmit={addTransac}
          >
            <div className="dspl-flex flex__direc-column align__items-start gap10">
              <label htmlFor="descrip">Descrição</label>
              <Input
                type={"text"}
                id={"descrip"}
                setDescrip={setDescrip}
                placeHolder={"Digite aqui sua descrição"}
              />
              <p className="text5">Ex: Compra de roupas</p>
            </div>
            <div className="dspl-flex gap10 justy__cont-SB">
              <div className="dspl-flex flex__direc-column gap10 w45">
                <label htmlFor="value">Valor</label>
                <Input
                  type={"text"}
                  id={"value"}
                  setValue={setValue}
                  placeHolder={"00.00"}
                />
              </div>
              <div className="dspl-flex flex__direc-column gap10 w45">
                <label htmlFor="">Tipo de valor</label>
                <Select setType={setType} array={listOption} />
              </div>
            </div>
            <Button type={"submit"} name={"Inserir valor"} />
          </form>

          {listTransactions.length >= 1 ? <Total count={count} /> : ""}
        </section>
        <div>
          <section className="dspl-flex justy__cont-SB align__items-center">
            <h2 className="text4 font-w700">Resumo financeiro</h2>
            <nav>
              <ul className="dspl-flex gap20">
                <LiFilter
                  array={nameLi}
                  filter={filter}
                  className={"font-w600"}
                />
              </ul>
            </nav>
          </section>

          <section>
            {listTransactions.length >= 1 ? (
              <ListTransactions delet={delet} list={listFilter} />
            ) : (
              <NoCards />
            )}
          </section>
        </div>
      </main>
    </>
  );
};
