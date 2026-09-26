import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    courses: [],
    address: {
      pincode: "",
      area: "",
      city: "",
    },
  });

  const nav = useNavigate();

  const getData = (b) => {
    const key = b.target.name;
    const value = b.target.value;
    setData({ ...data, [key]: value });
    console.log(key + "=" + value);
  };
  const getAddressData = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const getCourseData = (e) => {
    const { value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      courses: checked
        ? [...prev.courses, value]
        : prev.courses.filter((item) => item !== value),
    }));
  };

  const submitData = async (b) => {
    b.preventDefault();
    try {
      await axios.post("http://localhost:3000/user", data);
      alert("Data Submitted");
      console.log(data);
      nav("/viewuser");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="text-center text-success bg-dark p-2">Add New User</h1>
      <div className="container">
        <form
          className="form-input"
          onSubmit={(b) => {
            submitData(b);
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6 my-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control fw-bold"
                name="name"
                onChange={(b) => {
                  getData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="email"
                placeholder="Enter your email id"
                className="form-control fw-bold"
                name="email"
                onChange={(b) => {
                  getData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="number"
                placeholder="Enter your contact"
                className="form-control fw-bold"
                name="contact"
                onChange={(b) => {
                  getData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="date"
                placeholder="Enter your D.O.B"
                className="form-control fw-bold"
                name="dob"
                onChange={(b) => {
                  getData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              Male :
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="male"
                onChange={(b) => {
                  getData(b);
                }}
              />
              Female :
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="female"
                onChange={(b) => {
                  getData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              Java:
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                value="java"
                onChange={(b) => {
                  getCourseData(b);
                }}
              />
              SQL:
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                value="sql"
                onChange={(b) => {
                  getCourseData(b);
                }}
              />
              React:
              <input
                type="checkbox"
                className="form-check-input"
                name="course"
                value="react"
                onChange={(b) => {
                  getCourseData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="number"
                placeholder="Enter your pincode"
                className="form-control fw-bold"
                name="pincode"
                onChange={(b) => {
                  getAddressData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <input
                type="text"
                placeholder="Enter your area"
                className="form-control fw-bold"
                name="area"
                onChange={(b) => {
                  getAddressData(b);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-3">
              <select
                className="form-select"
                name="city"
                onChange={(b) => {
                  getAddressData(b);
                }}
              >
                <option>Select city</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="nagpur">Nagpur</option>
                <option value="nashik">Nashik</option>
                <option value="delhi">Delhi</option>
                <option value="surat">Surat</option>
                <option value="ahemdabad">Ahemdabad</option>
                <option value="banglore">Banglore</option>
              </select>
            </div>
            <div className="col-12 text-center my-3">
              <button className="btn btn-success mx-2">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddUser;
