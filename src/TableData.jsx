import React from "react";

const TableData = ({ data }) => {
  console.log("data", data);
  return (
    <div className="m-20 flex justify-center items-center ">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100  shadow-lg">
        <table className="table">
          <thead className="bg-gray-200">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => (
                <tr className="hover:bg-gray-100 cursor-pointer" key={user.id}>
                  <th>{user?.id} </th>
                  <td>{user?.name} </td>
                  <td>{user?.email} </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
