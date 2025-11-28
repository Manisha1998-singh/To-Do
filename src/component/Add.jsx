import React, { useState } from "react";

export default function Add({ addTodo }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") {
      setError(true);
      setErrorMessage("Task cannot be empty. Please enter a valid task.");
      return; // prevent empty tasks
    }
    setError(false);
    addTodo(task);
    setTask(""); // clear textarea
    setErrorMessage("");
  };

  return (
    <>
      <div>
        <p className=" text-red-700 mb-2">{errorMessage}</p>
      </div>
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
    </>
  );
}
