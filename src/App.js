import logo from "./logo.svg";
import "./App.css";

import Search from "./Search";
import Forecast from "./Forecast";
import FormatDate from "./Format";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Forecast />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
