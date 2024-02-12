import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";
import EditNote from "./EditNote";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import DetailedTodo from "./DetailedTodo";
import axios from "axios";

const AdminTodos = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);
  const [taskDetails, setTaskDetails] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const data = window.localStorage.getItem("allTasks");
    console.log("Getting data from allTasks", data);
    if (data) {
      setAllTasks(JSON.parse(data));
    } else {
      setAllTasks([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("allTasks", JSON.stringify(allTasks));
    console.log("Saving data from allTasks", allTasks);
  }, [allTasks]);

  useEffect(() => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
      });
  }, []);

  const fetchNewQuote = () => {
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
      });
  };
  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      task: task,
      taskDetails: taskDetails,
    };
    setAllTasks((prevTasks) => [...prevTasks, newTask]);
    setTask("");
    setTaskDetails("");
  };

  const handleDelete = (id) => {
    const updatedTasks = allTasks.filter((t) => t.id !== id);
    setAllTasks(updatedTasks);
  };

  const handleEdit = (id) => {
    setEditing(id);
  };
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(allTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAllTasks(items);
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="grid grid-cols-2 my-5">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            Hi👋, Your Todo's
          </h1>
        </div>
      </div>
      {/* Create Todos */}
      <div className="w-3/4 mx-auto my-8">
        <CreateTodo
          addTask={addTask}
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
          task={task}
          setTask={setTask}
        />
      </div>
      {/* DisplayTodo */}
      <div className="w-3/4 mx-auto">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {allTasks.map((t, index) => {
                  return (
                    <Draggable key={t.id} draggableId={t.id} index={index}>
                      {(provided) => (
                        <li
                          key={t.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {editing === t.id ? (
                            <EditNote
                              task={t}
                              setTask={setTask}
                              allTasks={allTasks}
                              setAllTasks={setAllTasks}
                              setEditing={setEditing}
                              taskId={t.id}
                            />
                          ) : (
                            <DisplayTodo
                              key={t.id}
                              taskDetails={t.taskDetails}
                              handleDelete={handleDelete}
                              task={t.task}
                              handleEdit={handleEdit}
                              taskId={t.id}
                            />
                          )}
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="my-12">
        <hr class="border-gray-600 mb-4" />
        
          <h1 className="text-gray-400 text-xl italic">{quote}</h1>"

      </div>
    </div>
  );
};

export default AdminTodos;
