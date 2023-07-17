import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskForm, setTaskForm] = useState({
    text: "",
    category: categories[0],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTaskForm((prevTaskForm) => ({ ...prevTaskForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(taskForm);
    setTaskForm({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={taskForm.text}
          onChange={handleInputChange}
          aria-label="Details"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskForm.category}
          onChange={handleInputChange}
          aria-label="Category"
        >
          {categories.map((category) => {
            if (category !== "All") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
