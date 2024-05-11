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
      <Router>
        <Navbar/>
        <div className="contaier">
          <Routes>
            <Route exact  path="/" element={<Homepage/>}></Route>
            <Route  path="/OnlineShooping" element={<Homepage/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/home" element={<Homepage/>}></Route>
            <Route exact path="/addproduct" element={<AddProductFroentend/>}></Route>
            <Route exact path={'/product/:id'} element={<ProductPage/>}></Route>
          </Routes>
        </div>
      </Router>
      </ProductState>
  );
}

export default App;
