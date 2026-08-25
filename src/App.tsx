import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/index";
import { Menu } from "./components/Menu/index";
import { Logo } from "./components/Logo/index";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { Heading } from "./components/Heading";
import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero((prevState) => prevState + 1);
  }
  return (
    <div>
      <Heading children={undefined}>Numero: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
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
            <DefaultInput
              labelText={numero.toString()}
              id="meuInput"
              type="text"
              placeholder="Digite uma task"
            />
          </div>
          <div className="formRow">
            <p>Lorem, ipsum dolor sit amet</p>
          </div>
          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} />
          </div>
        </form>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export { App };
