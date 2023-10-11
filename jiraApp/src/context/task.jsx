import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };
  const deleteTaskById = async (id) => {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
  
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    const response = await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
  
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };
  return <TasksContext.Provider value={sharedValuesAndMethods}>{children}</TasksContext.Provider>
}




export { Provider };
export default TasksContext;
