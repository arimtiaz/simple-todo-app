import React from "react";

const CreateTodo = ({addTask, task, setTask }) => {
  return (
    <div>
      {/*  */}
      <div className="flex  bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <input
          placeholder="Task Name"
          className="w-3/4 bg-zinc-900 focus:outline-none"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <button onClick={addTask} className=" bg-emerald-500 text-white font-semibold p-1 w-24 rounded-md">
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
