import React from "react";

export default function Complete({
  todo,
  toggleComplete,
  setEditingTodo,
  deleteToDo,
  filterByPriority,
}) {
  return (
    <div className="w-full inline-block h-80 overflow-y-scroll pr-2">
      {todo.map((todo) => (
        <div
          key={todo.id}
          className="border-b border-gray-200 w-full gap-4 py-2 mb-2">
          <div className="flex justify-between">
            {/* LEFT SIDE: Task + added date */}
            <span
              className="inline-block flex-1 lbl-text-white"
              style={{
                textDecoration: todo.Completed ? "line-through" : "none",
              }}>
              {todo.task}
              <span className="text-gray-500 text-sm w-full flex">
                Added on: {todo.createdAt}
              </span>
            </span>

            {/* RIGHT SIDE: Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => toggleComplete(todo.id)}
                className="text-blue-500 bg-transparent hover:text-blue-700">
                Complete
              </button>
              <button
                onClick={() => setEditingTodo(todo)}
                className="text-blue-500 hover:text-blue-700 bg-transparent">
                Edit
              </button>
              <button
                onClick={() => deleteToDo(todo.id)}
                className="text-red-500 hover:text-red-700 bg-transparent">
                Delete
              </button>
            </div>
          </div>
          {console.log(todo)}

          {/* Priority BELOW the row */}
          <p className="text-sm text-gray-500 mt-1">
            Priority:{" "}
            <span
              onClick={() => filterByPriority(todo.priority)}
              className={
                todo.priority === "High"
                  ? "inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 inset-ring inset-ring-pink-700/10"
                  : todo.priority === "Medium"
                  ? "inline-flex items-center rounded-md inset-ring bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 inset-ring-teal-700/10"
                  : "inline-flex items-center rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700 inset-ring inset-ring-gray-700/10"
              }>
              {todo.priority}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
