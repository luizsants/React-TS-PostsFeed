import { Post } from "./Post";
import "./styles.css";

export function App() {
    return (
        <div className="">
            <h1>Olá Luiz Fernando</h1>
            <Post
                author="Luiz Santos"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit debitis quidem nam quam id cupiditate dignissimos dolorum iste cum ab quas ad necessitatibus, repudiandae, adipisci ut atque quibusdam accusantium doloribus."
            />
        </div>
    );
}
