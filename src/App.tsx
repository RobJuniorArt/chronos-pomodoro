import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa iusto
        aspernatur dignissimos explicabo deserunt quod quam, ipsam, repellat
        placeat illum nobis nostrum dolor, nihil dolore veritatis neque corrupti
        tempora assumenda!
      </p>
    </div>
  );
}

export { App };
