import React from "react";

const DetailedTodo = () => {
  return (
    <div>
      <div className="text-left flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-xl bg-zinc-900 focus:outline-none mb-3" type="text">
          {" "}
          Task Name
        </h1>
        <p
          className=" bg-zinc-900 focus:outline-none mb-12"

          // onChange={(e) => setTask(e.target.value)}
          // value={}
        >
          Description
        </p>
        <hr class="border-gray-600 mb-4" />
        <button
          type="button"
          class=" border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailedTodo;
