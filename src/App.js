import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by{" "}
        <a
          href="https://deanlucianvoss.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Dean Voss
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/dean1022/dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dean-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
