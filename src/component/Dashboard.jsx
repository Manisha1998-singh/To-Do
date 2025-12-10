import React, { useState, useEffect } from "react";
import Add from "./Add";
import Edit from "./Edit";
import Complete from "./Complete"; // Your item component
import Delete from "./Delete";
import Search from "./Search";
import Button from "./Button";
import Badges from "./Badges";
import useDebounce from "./useDebounce";
import DashboardItem from "./DashboardItem";
function Dashboard() {
  const [editingTodo, setEditingTodo] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("all");
  const debouncedSearch = useDebounce(searchText, 600);
  const [todos, setToDos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Add Todo
  const addTodo = (task, priority) => {
    const now = new Date();
    if (task.trim() === "") return;

    setToDos([
      ...todos,
      {
        id: Date.now(),
        task,
        priority,
        Completed: false, // KEEP capital "C"
        createdAt: now.toISOString(),
      },
    ]);
  };

  // Update Todo
  const upDateTodo = (id, newTask) => {
    setToDos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
    setEditingTodo(null);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, Completed: !todo.Completed } : todo
      )
    );
  };

  // Delete
  const deleteToDo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  // 🔍 Apply Search + Filters Together
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const filterByPriority = (priority) => {
    setFilter(priority);
  };

  const filterButtons = filteredTodos.filter((todo) => {
    if (filter === "completed") return todo.Completed === true;
    if (filter === "incomplete") return todo.Completed === false;
    if (filter === "today") {
      const today = new Date().toDateString();
      return new Date(todo.createdAt).toDateString() === today;
    }
    if (filter === "High" || filter === "Medium" || filter === "Low") {
      return todo.priority === filter;
    }
    return true; // "all"
  });
  return (
    <>
      <h1 className="text-center text-3xl font-semibold mb-4">My To Do List</h1>

      <div className="md:w-1/2 mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Add addTodo={addTodo} />

          {/* Search Input */}
          <Search searchText={searchText} setSearchText={setSearchText} />

          {/* Filter Buttons */}
          <div className="flex-1 mb-4  gap-4 flex">
            <Button
              onClick={() => setFilter("all")}
              label="All"
              active={filter === "all"}
            />
            <Button
              onClick={() => setFilter("completed")}
              label="Completed"
              active={filter === "completed"}
            />
            <Button
              onClick={() => setFilter("incomplete")}
              label="Incomplete"
              active={filter === "incomplete"}
            />
            <Button
              onClick={() => setFilter("today")}
              label="Today"
              active={filter === "today"}
            />
          </div>

          <Badges />
          {/* Render Filtered Todos */}
          <ul className="mt-4">
            {filterButtons.length === 0 && (
              <p className="text-center text-gray-400">No tasks found...</p>
            )}
            <p>Searching for: {debouncedSearch}</p>

            <Complete
              todo={filterButtons} // <-- final filtered result
              toggleComplete={toggleComplete}
              deleteToDo={deleteToDo}
              setEditingTodo={setEditingTodo}
              filterByPriority={filterByPriority}
            />
          </ul>

          {/* Edit Component */}
          <Edit editingTodo={editingTodo} upDateTodo={upDateTodo} />
          <div className="mt-6">
            <DashboardItem title="Task 1" description="Finish Tailwind setup" />
            <DashboardItem
              title="Task 2"
              description="Implement dark mode toggle"
            />
            <DashboardItem title="Task 3" description="Build To-Do UI" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
