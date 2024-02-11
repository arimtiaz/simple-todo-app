import React from "react";

const DisplayTodo = ({ taskId, handleDelete, task, handleEdit }) => {
  return (
    <div>
      <div className="flex bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white font-semibold text-xl w-3/4 text-left">
          {task}
        </h1>
        <button
          onClick={() => handleEdit(taskId)} // Pass the taskId to handleEdit
          className="mx-2 bg-purple-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(taskId)} // Pass the taskId to handleDelete
          className="bg-orange-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DisplayTodo;
