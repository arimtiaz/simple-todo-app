import React, { useState } from "react";

const EditNote = ({ taskId, task, setAllTasks, setEditing }) => {
  const [updatedTask, setUpdatedTask] = useState(task.task);

  const editTask = () => {
    setAllTasks(prevTasks => {
      return prevTasks.map(t => {
        if (t.id === taskId) {
          return { ...t, task: updatedTask };
        }
        return t;
      });
    });
    setEditing(null)
    
  };

  return (
    <div>
      <div className="flex border border-purple-500 shadow-sm rounded-xl p-4 md:p-5 dark:bg-indigo-900 dark:border-gray-700 dark:text-white">
        <input
          placeholder="Edited Task Name"
          className="w-3/4 bg-indigo-900 focus:outline-none"
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <button
          onClick={editTask}
          className="bg-purple-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditNote;
