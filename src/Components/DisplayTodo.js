import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailedTodo from "./DetailedTodo";

const DisplayTodo = ({
  taskDetails,
  allTasks,
  setTaskDetails,
  todoID,
  handleDelete,
  task,
  handleEdit,
}) => {
  const [selectedTask, setSelectedTask] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const { todoID: urlTodoID } = useParams();

  const handleTaskDetails = (taskId) => {
    const selected = allTasks.find((task) => task.id === taskId);

    if (selected) {
      setSelectedTask(selected);
      setTaskDetails(selected.taskDetails);
      setIsSelected(true); 
      console.log(selected.task, selected.taskDetails, selected.id);
    }
  };

  return (
    <div>
      <div className="flex bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white font-semibold text-xl w-3/4 text-left">
          {task}
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
      {isSelected && <DetailedTodo task={task} taskDetails={taskDetails}></DetailedTodo>}
    </div>
  );
};

export default DisplayTodo;
