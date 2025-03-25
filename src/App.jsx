import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";

const App = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await axios.get(
        "https://nextjs-boilerplate-five-plum-29.vercel.app/api/tasks"
      );

      let completedTasks = result.data.filter(
        (task) => task.completed === true
      );

      let users = [];
      for (let task of completedTasks) {
        const userResult = await axios.get(
          `https://nextjs-boilerplate-five-plum-29.vercel.app/api/users/${task.id}`
        );
        if (userResult.data && userResult.data.name) {
          users.push(userResult.data);
        }
        // console.log(typeof userResult.data);
      }

      setUserData(users);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{userData.length > 0 && <TableData data={userData} />}</div>;
};

export default App;
