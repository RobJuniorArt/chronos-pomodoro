import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, vel,
      tenetur dignissimos, perspiciatis amet esse magni earum deserunt
      cupiditate nam temporibus error vitae. Earum consequuntur veniam a debitis
      fugiat suscipit!
    </p>
  </StrictMode>,
);
