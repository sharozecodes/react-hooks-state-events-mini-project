import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const renderedTasks = tasks.map((task) => (
    <Task
      key={task.id}
      text={task.text}
      category={task.category}
      onDelete={() => handleTaskDelete(task.id)}
    />
  ));

  return <div className="tasks">{renderedTasks}</div>;
}

export default TaskList;
