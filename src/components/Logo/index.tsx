import styles from "./styles.module.css";
import { TimerIcon } from "lucide-react";

type LogoProps = {
  children: React.ReactNode;
};

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
