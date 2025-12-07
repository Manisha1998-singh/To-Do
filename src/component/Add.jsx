import React, { useState, useRef } from "react";

function Add({ addTodo }) {
  const inputRef = useRef();
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [priority, setPriority] = useState("High");

  const handleAdd = () => {
    if (task.trim() === "") {
      setError(true);
      setErrorMessage("Task cannot be empty. Please enter a valid task.");
      inputRef.current.focus();
      return; // prevent empty tasks
    }
    setError(false);
    addTodo(task, priority);
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
          ref={inputRef}
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
          value={priority}
          className="bg-blue-500 hover:bg-blue-700 
                            text-white font-bold py-2 px-4 rounded">
          Add
        </button>
        <select
          className="border px-2 py-1 rounded"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
      </div>
    </>
  );
}
export default React.memo(Add);
