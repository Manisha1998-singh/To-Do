import React, { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Complete from "./Complete";
import Delete from "./Delete";

export default function Dashboard() {
  const [toDos, setToDos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  // Add new todo
  const addTodo = (task) => {
    if (task.trim() === "") return; // prevent empty tasks
    setToDos([...toDos, { id: Date.now(), task, Completed: false }]);
  };

  // Update todo text
  const upDateTodo = (id, newTask) => {
    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
    setEditingTodo(null); // close edit after save
  };

  // Toggle complete status
  const toggleComplete = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
      )
    );
  };

  // Delete todo
  const deleteToDo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-4">My To Do List</h1>
      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Add addTodo={addTodo} />

          <ul>
            <li className=" w-full py-4">
              <Complete
                todos={toDos}
                toggleComplete={toggleComplete}
                setEditingTodo={setEditingTodo}
                deleteToDo={deleteToDo}
              />

              <Edit editingTodo={editingTodo} upDateTodo={upDateTodo} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
