import { Route, Routes } from "react-router";
import Receipt from "./pages/Receipt";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Receipt />} />
    </Routes>
  );
}

export default App;
