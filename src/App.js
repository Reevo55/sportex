import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import Catalog from "./pages/catalog";
import Shop from "./pages/shop";
import Basket from './pages/basket';
import Summary from './pages/summary';
import OrderHistory from './pages/orderHistory';

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

        <Route path="/katalog" component={Shop}>
        </Route>

        <Route exact path="/koszyk">
          <Basket/>
        </Route>

        <Route exact path="/podsumowanie">
          <Summary/>
        </Route>

        <Route exact path="/historia" component={OrderHistory} />

      </BrowserRouter>
    </div>
  );
}

export default App;
