import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";
import EditNote from "./EditNote";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

const AdminTodos = () => {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editing, setEditing] = useState(null);

  const addTask = () => {
    if (task.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        task: task,
      };
      setAllTasks(prevTasks => [...prevTasks, newTask]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const updatedTasks = allTasks.filter((t) => t.id !== id);
    setAllTasks(updatedTasks);
  };

  const handleEdit = (id) => {
    setEditing(id);
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="grid grid-cols-2 my-5">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            Hi👋, Your Todo's
          </h1>
        </div>
        <div>
          <h1 className="text-white text-2xl font-semibold">Widget Here</h1>
        </div>
      </div>
      {/* Create Todos */}
      <div className="w-3/4 mx-auto my-8">
        <CreateTodo addTask={addTask} task={task} setTask={setTask} />
      </div>
      {/* DisplayTodo */}
      <div className="w-3/4 mx-auto">
        <DragDropContext>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {allTasks.map((t, index) => (
                  <Draggable key={t.id} draggableId={t.id} index={index}>
                    {(provided) => (
                      <div
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
                          ></EditNote>
                        ) : (
                          <DisplayTodo
                            key={t.id} // Assign the key to the outermost element
                            handleDelete={handleDelete}
                            task={t.task}
                            handleEdit={handleEdit}
                            taskId={t.id}
                          ></DisplayTodo>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default AdminTodos;
