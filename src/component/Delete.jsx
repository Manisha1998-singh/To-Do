import React from "react";

export default function Delete({ deleteToDo, toDos }) {
  return (
    <div>
      {toDos.map((todo) => (
        <div key={todo.id}>
          <button
            onClick={() => deleteToDo(todo.id)}
            className="text-red-500 hover:text-red-700
                     mr-2 delete-btn">
            Delete Task
          </button>
        </div>
      ))}
    </div>
  );
}
