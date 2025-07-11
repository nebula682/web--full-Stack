// NewTodoForm.jsx
import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newItem);
    setNewItem(""); // Optional: clears input after adding
  }

  return (
    <form onSubmit={handleSubmit} className="new_item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}