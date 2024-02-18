import React from "react";

const DetailedTodo = ({ task, taskDetails }) => {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto flex justify-center items-center h-screen">
        <div className="text-left flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
          {/* Display task name */}
          <h1 className="text-xl bg-zinc-900 focus:outline-none mb-3">{task}</h1>
          {/* Display task details */}
          <p className="bg-zinc-900 text-white focus:outline-none mb-12">{taskDetails}</p>
          <hr className="border-gray-600 mb-4" />
          <button
            className="border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
            onClick={() => {
              // Handle back button click action
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedTodo;
