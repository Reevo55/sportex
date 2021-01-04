import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import Catalog from "./pages/catalog";
import Shop from "./pages/shop";
import Basket from './pages/basket';
import Summary from './pages/summary';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/kategorie">
          <Catalog/>
        </Route>

        <Route exact path="/katalog">
          <Shop/>
        </Route>

        <Route exact path="/kosz">
          <Basket/>
        </Route>

        <Route exact path="/podsumowanie">
          <Summary/>
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;
