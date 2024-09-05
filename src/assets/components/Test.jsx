import React, { useEffect, useState } from "react";

function DataTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("public/Data.json") 
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            // <tr key={item.id}>
            //   <td>{item.id}</td>
            //   <td>{item.Name}</td>
            //   <td>{item.email}</td>
            // </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
