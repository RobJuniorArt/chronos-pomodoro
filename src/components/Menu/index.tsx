import { useState } from "react";
import styles from "./styles.module.css";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

type AvailableTheme = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableTheme>("dark");

  function handleThemeChange(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    e.preventDefault();
    let themeColor = theme;
    if (theme === "dark") {
      themeColor = "light";
    } else {
      themeColor = "dark";
    }
    setTheme(themeColor);
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a home"
        title="Ir para a home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver historico"
        title="Ver historico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar o Tema"
        title="Mudar o Tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
