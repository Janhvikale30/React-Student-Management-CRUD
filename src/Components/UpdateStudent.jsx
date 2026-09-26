import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateStudent = () => {
  const param = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3000/student/${param.id}`,
        );
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateStudents = async (e, id, data) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/student/${id}`, data);
      alert("Student updated successfully");
      nav("/viewstudent");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  return (
    <>
      <h1 className="text-warning bg-dark p-2 text-center">Edit Student</h1>
      <div className="container">
        <form
          onSubmit={(e) => {
            updateStudents(e, param.id, data);
          }}
        >
          <div className="row">
            <div className="col-12 col-md-6 my-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control fw-bold"
                value={data.name}
                name="name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-2">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="form-control fw-bold"
                value={data.phoneNumber}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-2">
              <input
                type="email"
                placeholder="Enter your email id"
                className="form-control fw-bold"
                value={data.email}
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="col-12 col-md-6 my-2">
              <input
                type="text"
                placeholder="Enter your location"
                className="form-control fw-bold"
                value={data.location}
                name="location"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-warning mx-2" type="submit">
                Edit
              </button>
              <input type="reset" className="btn btn-danger mx-2" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateStudent;
