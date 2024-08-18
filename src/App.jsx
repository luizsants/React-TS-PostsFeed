import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <div className="">
      <Header />

      <Post author="Luiz Santos" content="Content" />
    </div>
  );
}
