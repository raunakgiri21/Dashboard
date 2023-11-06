import { Route, Routes } from "react-router-dom";
import Layout from "./components/shared/LAyout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-backgroundColor">
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Dashboard />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
