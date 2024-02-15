import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailedTodo from "./DetailedTodo";

const UserTodo = ({
  taskDetails,
  allTasks,
  setTaskDetails,
  todoID,
  task,
}) => {
  const [enrollmentCount, setEnrollmentCount] = useState(0);

  const enrollUser = () => {
    if (enrollmentCount === 0) {
      setEnrollmentCount(1);
      console.log("User enrolled successfully!");
    } else {
      console.log("User has already enrolled.");
    }
  };

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
    <div className="mx-5 ">
      <div className="flex bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-zinc-900 dark:border-gray-700 dark:text-white">
        <h1 className="text-white font-semibold text-xl w-3/4 text-left">
          {task}
        </h1>
        <p className="mx-2 text-orange-400">
          Enrolled Users: {enrollmentCount}
        </p>

        {enrollmentCount === 0 && (
          <button
            type="button"
            className="mx-2 border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
            onClick={enrollUser}
          >
            Enroll
          </button>
        )}
        <Link to={`/usertodos/${todoID}`}>
          <button
            type="button"
            className="border border-2 border-slate-600 text-slate font-semibold p-1 w-24 rounded-md"
            onClick={() => handleTaskDetails(todoID)}
          >
            Details
          </button>
        </Link>
      </div>
      {isSelected && <DetailedTodo task={task} taskDetails={taskDetails}></DetailedTodo>}
    </div>
  );
};

export default UserTodo;
