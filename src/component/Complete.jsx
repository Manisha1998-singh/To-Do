import React from "react";

export default function Complete({
  todos,
  toggleComplete,
  setEditingTodo,
  deleteToDo,
}) {
  return (
    <div className="w-full inline-block">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="border-b border-gray-200  w-full gap-4 flex  justify-between py-2 mb-2">
          <span
            className="inline-block flex-1"
            style={{
              textDecoration: todo.Completed ? "line-through" : "none",
            }}>
            {todo.task}
          </span>
          <div className="flex gap-4">
            <button
              onClick={() => toggleComplete(todo.id)}
              className="text-blue-500
                     hover:text-blue-700 edit-btn">
              Complete
            </button>
            <button
              onClick={() => setEditingTodo(todo)}
              className="text-blue-500
                     hover:text-blue-700 edit-btn">
              Edit
            </button>

            <button
              onClick={() => deleteToDo(todo.id)}
              className="text-red-500 hover:text-red-700
                     mr-2 delete-btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
