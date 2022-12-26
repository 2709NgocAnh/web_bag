import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./layouts/header/Header";
import Register from "./modules/Auth/page/register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
