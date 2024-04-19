import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Alert message="I am vraj" /> */}
        <div className="contaier">
          <Routes >
            <Route exact path="/" element={<Login/>}></Route>
            <Route  path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
