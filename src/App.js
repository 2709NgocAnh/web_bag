import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout";
import PUBLICROUTES from "./routes/publicRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {PUBLICROUTES.map((route, index) => {
          const Page = route.component;
          return (
            <>
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            </>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
