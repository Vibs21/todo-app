import { useState } from 'react';

function AddTodo({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
        placeholder="Add a new task..."
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
