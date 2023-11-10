import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Main from "./component/main/Main";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
