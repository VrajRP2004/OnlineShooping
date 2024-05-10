import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./components/Signup";
import Homepage from "./components/Homepage/Homepage";
import AddProductFroentend from "./components/product/AddProductFroentend"
import ProductState from "./context/product/ProductState"
import ProductPage from "./components/product/ProductPage";
function App() {
  return (
    <ProductState>
      <Router basename="/home">
        <Navbar/>
        <div className="contaier">
          <Routes>
            <Route  path="/" element={<Homepage/>}></Route>
            <Route  path="/OnlineShooping" element={<Homepage/>}></Route>
            <Route  path="/login" element={<Login/>}></Route>
            <Route  path="/signup" element={<Signup/>}></Route>
            <Route  path="/home" element={<Homepage/>}></Route>
            <Route  path="/addproduct" element={<AddProductFroentend/>}></Route>
            <Route  path={'/product/:id'} element={<ProductPage/>}></Route>
          </Routes>
        </div>
      </Router>
      </ProductState>
  );
}

export default App;
