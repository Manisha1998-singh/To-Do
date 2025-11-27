import React, { useState } from "react";

export default function Add({ addTodo }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (task.trim() === "") {
      setError(true);
      return; // prevent empty tasks
    }
    setError(false);
    addTodo(task);
    setTask(""); // clear textarea
  };

  return (
    <div className="flex mb-4">
      <textarea
        placeholder="Enter your task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          setError(false);
        }}
        className={`w-full px-4 py-2 mr-2 rounded-lg focus:outline-none 
    ${
      error
        ? "border border-red-500"
        : "border border-gray-400 focus:border-blue-500"
    }
  `}
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  );
}
