function Button({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md border  flex-1
        ${active ? "bg-blue-500 text-white" : "bg-white text-gray-700"}
      `}>
      {label}
    </button>
  );
}

export default Button;
