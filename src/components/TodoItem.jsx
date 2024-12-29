import { useState } from 'react';

function TodoItem({ task, onToggleTask, onDeleteTask, onEditTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.todo);

  const handleSaveEdit = () => {
    onEditTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
        />
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-grow px-2 py-1 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
          />
        ) : (
          <p
            className={`font-medium ${
              task.completed ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {task.todo}
          </p>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {isEditing ? (
          <button
            onClick={handleSaveEdit}
            className="text-green-500 hover:text-green-700 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-500 hover:text-blue-500 transition"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDeleteTask(task.id)}
          className="text-gray-500 hover:text-red-500 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
