import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./components/Router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
