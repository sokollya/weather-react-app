import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="Card">
      <div className="App">
        <div className="container">
          <Search defaultCity="Kharkiv" />
        </div>
      </div>
      <div className="Contact">
        <a href="https://github.com/sokollya/my-project1" target="_blank">
          Open-source code
        </a>{" "}
        by Yana Sokol
      </div>
    </div>
  );
}
