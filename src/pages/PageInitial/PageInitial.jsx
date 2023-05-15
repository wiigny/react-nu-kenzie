import "./pageInitial.css";
import "../../styles/display.css";
import "../../styles/globalStyles.css";
import "../../styles/propFlex.css";
import "../../styles/texts.css";

export const PageInitial = ({ setCheck }) => {
  return (
    <>
      <main className="mainInitial">
        <div
          id="divInitial"
          className="container1 dspl-flex align__items-center gap50"
        >
          <section>
            <h1>
              <span>Nu</span> Kenzie
            </h1>
            <p className="text0 font-w800">
              Centralize o controle das suas finanças
            </p>
            <p className="text4 font-w400">de forma rápida e segura</p>
            <button className="font-w600" onClick={() => setCheck(true)}>
              Iniciar
            </button>
          </section>

          <section id="sect2">
            <div></div>
          </section>
        </div>
      </main>
    </>
  );
};
