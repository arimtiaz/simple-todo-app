const DetailedTodo = ({ task, taskDetails }) => {
  console.log("Received props:", task, taskDetails);

  return (
    <div className="max-w-screen-lg mx-auto flex justify-center items-center h-screen">
      <div className="text-left flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-xl bg-zinc-900 focus:outline-none mb-3">
          Task Name: {task}
        </h1>
        <p className="bg-zinc-900 focus:outline-none mb-12">
          Description: {taskDetails}
        </p>
        <hr className="border-gray-600 mb-4" />
        <button
          className="border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default DetailedTodo;
