import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate }) {
  const [title, setTitle] = useState(task?task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    // bu method yenilenmesini engeller sayfanın
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen taskı düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlığı düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              rows={5}
              className="task-input"
            />
            <button onClick={handleSubmit} className="update-button">
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              rows={5}
              className="task-input"
            />
            <button onClick={handleSubmit} className="task-button">
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
