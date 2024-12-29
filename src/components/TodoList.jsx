import TodoItem from './TodoItem';

function TodoList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  return (
    <>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks to display!</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggleTask={onToggleTask}
              onDeleteTask={onDeleteTask}
              onEditTask={onEditTask}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
