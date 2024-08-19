import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
    return (
        <div className="">
            <Header />
            <Post />

            <div className="wrapper"></div>
        </div>
    );
}
