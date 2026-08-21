import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/index";
import { Heading } from "./components/Heading/index";
import { Logo } from "./components/Logo/index";

function App() {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </div>
  );
}

export { App };
