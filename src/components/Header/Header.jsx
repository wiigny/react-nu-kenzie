import { Button } from "../Button/Button";

export const Header = ({ setCheck }) => {
  return (
    <header>
      <div className="container1 dspl-flex justy__cont-SB align__items-center">
        <h1>
          <span>Nu</span> Kenzie
        </h1>
        <Button
          click={setCheck}
          className={"font-w600"}
          boolean={false}
          name={"Inicio"}
        />
      </div>
    </header>
  );
};
