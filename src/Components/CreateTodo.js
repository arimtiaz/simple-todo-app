import React from "react";

const CreateTodo = ({setTaskDetails, taskDetails, addTask, task, setTask }) => {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <input
          placeholder="Task Name"
          className=" bg-zinc-900 focus:outline-none mb-3"
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <textarea
          placeholder="Description"
          className=" bg-zinc-900 focus:outline-none"
          type="text"
          onChange={(e) => setTaskDetails(e.target.value)}
          rows={3}
          cols={38}
          value={taskDetails}
        />
        
        <hr class="border-gray-600 mb-4" />
        <button
          onClick={addTask}
          className="relative bottom-0 right-0 bg-emerald-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};

export default CreateTodo;
