import { useState } from "react";

import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewStudent from "./Components/NewStudent";
import ViewStudent from "./Components/ViewStudent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import AddUser from "./Components/AddUser.jsx";
import ViewUser from "./Components/ViewUser.jsx";
import UpdateStudent from "./Components/UpdateStudent.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addstudent" element={<NewStudent />}></Route>
          <Route path="/viewstudent" element={<ViewStudent />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/viewuser" element={<ViewUser />}></Route>
          <Route path="/updatestudent/:id" element={<UpdateStudent />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
