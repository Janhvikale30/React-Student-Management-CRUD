import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/user");
        setData(result.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-center text-danger bg-dark p-2">View Students</h1>
      <table className="table table-striped table hover w-75 mx-auto my-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>Pincode</th>
            <th>Area</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <td>{v.name}</td>
                <td>{v.email}</td>
                <td>{v.contact}</td>
                <td>{v.dob}</td>
                <td>{v.gender}</td>
                <td>{v.courses?.join(", ") || "N/A"}</td>
                <td>{v.address?.pincode || "N/A"}</td>
                <td>{v.address?.area || "N/A"}</td>
                <td>{v.address?.city || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ViewUser;
