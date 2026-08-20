import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container/index";
import { Heading } from "./components/Heading/index";

function App() {
  return (
    <div>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </div>
  );
}

export { App };
