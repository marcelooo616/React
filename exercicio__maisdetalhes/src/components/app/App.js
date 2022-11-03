import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import ProductPage from "../../pageComida";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
