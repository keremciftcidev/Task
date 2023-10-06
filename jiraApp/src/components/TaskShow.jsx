import { useState } from "react";

import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(true);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        
       <TaskCreate task = {task} taskFormUpdate={true}/>
        
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
