import React from "react";

export default function Complete({
  todo,
  toggleComplete,
  setEditingTodo,
  deleteToDo,
}) {
  return (
    <div className="w-full inline-block h-80 overflow-y-scroll pr-2">
      {todo.map((todo) => (
        <div
          key={todo.id}
          className="border-b border-gray-200  w-full gap-4 flex  justify-between py-2 mb-2">
          <span
            className="inline-block flex-1"
            style={{
              textDecoration: todo.Completed ? "line-through" : "none",
            }}>
            {todo.task}
            <span className="text-gray-500 text-sm  w-full flex">
              Added on: {todo.createdAt}
            </span>
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
          <p className="text-sm text-gray-500">
            Priority:
            <span
              className={
                todo.priority === "High"
                  ? "text-red-500 font-semibold"
                  : todo.priority === "Medium"
                  ? "text-yellow-600 font-semibold"
                  : "text-green-600 font-semibold"
              }>
              {todo.priority}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
