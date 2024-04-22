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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Alert message="I am vraj" /> */}
        <div className="contaier">
          <Routes >
            <Route exact path="/" element={<Homepage/>}></Route>
            <Route  path="/login" element={<Login/>}></Route>
            <Route exact path="/signup" element={<Signup/>}></Route>
            <Route exact path="/home" element={<Homepage/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
