import { useState } from "react";
import TasksContext from "../context/task";
import { useContext } from "react"; 
import TaskCreate from "./TaskCreate";


function TaskShow({ task }) {
  const {editTaskById,deleteTaskById} = useContext(TasksContext)
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id)
  };
  const handleEditClick = () => {
    setShowEdit(true);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    editTaskById(id,updatedTitle,updatedTaskDesc)
  };
  
  return (
    <div className="task-show">
      {showEdit ? (
        
       <TaskCreate task = {task} taskFormUpdate={true} onUpdate={handleSubmit} />
        
      ) : (
        <>
        
          <div>
            <h3 className="task-title">Göreviniz</h3>
            <p>{task.title}</p>
            <h3 className="task-title">Yapılacaklar</h3>
            <p>{task.taskDesc}</p>
            <div>
              <button className="btn-delete" onClick={handleDeleteClick}>
                Delete
              </button>
              <button className="btn-update" onClick={handleEditClick}>
                Update
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
