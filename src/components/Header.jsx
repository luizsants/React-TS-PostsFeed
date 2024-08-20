<<<<<<< HEAD
import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    );
=======
export function Header() {
    return (
        <strong>Ignite Feed</strong>
    );

>>>>>>> 9b3ccdb000221ed94a0bfabfdaa77a486cbd861f
}
