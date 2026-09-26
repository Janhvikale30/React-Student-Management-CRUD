import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
  });
  const nav = useNavigate();
  const handleData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/student", data);
      alert("Data submitted!");
      nav("/viewstudent");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="text-success bg-primary text-center p-2">
        Add New Student
      </h1>
      <div className="container">
        <form
          className="form-input"
          onSubmit={(e) => {
            submitData(e);
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6 my-3">
              <input
                type="text"
                placeholder="Enter name"
                className="form-control fw-bold"
                name="name"
                onChange={(e) => handleData(e)}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="tel"
                placeholder="Enter your phone"
                className="form-control fw-bold"
                name="phoneNumber"
                onChange={(e) => {
                  handleData(e);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="email"
                placeholder="Enter your email id"
                className="form-control fw-bold"
                name="email"
                onChange={(e) => {
                  handleData(e);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="text"
                placeholder="Enter your location"
                className="form-control fw-bold"
                name="location"
                onChange={(e) => {
                  handleData(e);
                }}
              />
            </div>
            <div className="col-12 my-3 text-center">
              <button className="btn btn-success mx-2">Add Student</button>
              <button className="btn btn-danger mx-2">Reset Data</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewStudent;
