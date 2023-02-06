import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./components/Router";
import "./components/templateStyle.scss";


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
