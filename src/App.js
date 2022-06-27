import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Kharkiv" />
      </div>
    </div>
  );
}
