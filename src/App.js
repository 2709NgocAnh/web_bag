import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/header/Header";
import Register from "./modules/Auth/page/register/Register";
import Home from "./modules/Home/page/PageShop/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
