import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailedTodo from "./DetailedTodo";

const DisplayTodo = ({
  allTasks,
  setTaskDetails,
  todoID,
  handleDelete,
  handleEdit,
}) => {
  const [selectedTask, setSelectedTask] = useState({});
  const { todoID: urlTodoID } = useParams();

  const handleTaskDetails = (taskId) => {
    const selected = allTasks.find((task) => task.id === taskId);

    if (selected) {
      setSelectedTask(selected);
      setTaskDetails(selected.taskDetails);
    }
  };

  return (
    <div>
      <div className="flex bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white font-semibold text-xl w-3/4 text-left">
          {selectedTask.task} {/* Render selected task name */}
        </h1>

        <Link to={`/usertodos/${todoID}`}>
          <button
            type="button"
            className="border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
            onClick={() => handleTaskDetails(todoID)}
          >
            Details
          </button>
        </Link>
        <button
          onClick={() => handleEdit(todoID || urlTodoID)}
          className="mx-2 bg-purple-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(todoID || urlTodoID)}
          className="bg-orange-500 text-white font-semibold p-1 w-24 rounded-md"
        >
          Delete
        </button>
      </div>
      <DetailedTodo
        task={selectedTask.task} 
        taskDetails={selectedTask.taskDetails} 
      />
    </div>
  );
};

export default DisplayTodo;
