import { Post } from "./Post";
<<<<<<< HEAD
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post author="Luiz" content="Content" />
                    <Post author="Luiz2" content="Content2" />
                </main>
            </div>
=======
import "./styles.css";

export function App() {
    return (
        <div className="">
            <h1>Olá Luiz Fernando</h1>
            <Post
                author="Luiz Santos"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit debitis quidem nam quam id cupiditate dignissimos dolorum iste cum ab quas ad necessitatibus, repudiandae, adipisci ut atque quibusdam accusantium doloribus."
            />
>>>>>>> 9b3ccdb000221ed94a0bfabfdaa77a486cbd861f
        </div>
    );
}
