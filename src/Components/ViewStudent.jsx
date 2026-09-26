import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewStudent = () => {
  const nav = useNavigate();
  let [data, setData] = useState([]);

  const result = async () => {
    try {
      const result = await axios.get("http://localhost:3000/student");
      setData(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    result();
  }, []);

  const deleteStudent = async (id) => {
    const conf = confirm("You want to delete?");
    if (conf) {
      try {
        const result = data.filter((val) => id != val.id);
        setData(result);
        await axios.delete(`http://localhost:3000/student/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <h1 className="text-center text-danger bg-dark p-2">View Students</h1>
      <table className="table table-striped table hover w-75 mx-auto my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.name}</td>
                <td>{val.phoneNumber}</td>
                <td>{val.email}</td>
                <td>{val.location}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => nav(`/UpdateStudent/${val.id}`)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => deleteStudent(val.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewStudent;
