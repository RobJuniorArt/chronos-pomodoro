import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/index";
import { Menu } from "./components/Menu/index";
import { Logo } from "./components/Logo/index";

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
    </div>
  );
}

export { App };
