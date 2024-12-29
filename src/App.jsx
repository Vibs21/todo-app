import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FilterTabs from './components/FilterTabs';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // "all", "completed", or "pending"

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTasks(storedTasks);
      if (storedTasks.length == 0) {
        fetch('https://dummyjson.com/todos?limit=4')
          .then((data) => {
            return data.json();
          })
          .then((data) => {
            console.log('data', data.todos);
            setTasks(data.todos);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }
    } catch (error) {
      console.error('Error parsing tasks from localStorage:', error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const addTask = (taskText) => {
    const newTask = {
      id: uuidv4(),
      todo: taskText,
      completed: false,
      date: new Date().toLocaleString(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, todo: newText } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    console.log('task', task);
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; //all
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">To-do App</h1>
        <AddTodo onAddTask={addTask} />
        <FilterTabs filter={filter} setFilter={setFilter} />
        <TodoList
          tasks={filteredTasks}
          onToggleTask={toggleTaskCompletion}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
        />
      </div>
    </div>
  );
}

export default TodoApp;
