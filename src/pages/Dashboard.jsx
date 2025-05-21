import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = () => {
    console.log(data);
    setTodoList([...todoList, data]);
    setData("");
  };

  return (
    <div className="bg-amber-100 w-300px justify-center content-center">
      <div className="justify-items-center">
        <input
          className="border-black border-2 m-4 p-4 w-200"
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button
          className="bg-blue-600 rounded-2xl p-4 text-black"
          onClick={handleSubmit}
        >
          yourChoice
        </button>
      </div>
      <ol>
        {todoList.length > 0 &&
          todoList.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    </div>
  );
};

export default Dashboard;

