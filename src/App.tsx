import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/index";
import { Menu } from "./components/Menu/index";
import { Logo } from "./components/Logo/index";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput id="meuInput" type="text" />
          </div>
          <div className="formRow">
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0 0 </p>
          </div>
          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export { App };
