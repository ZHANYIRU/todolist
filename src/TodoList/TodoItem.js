import React from "react";
import { HiX } from "react-icons/hi";
function TodoItem({ el, delTodo, okTodo }) {
  return (
    <div className="matter">
      <div>
        <input
          type="checkbox"
          checked={el.completed}
          onChange={() => okTodo(el.id)}
        />
        <p style={{ textDecoration: el.completed && "line-through" }}>
          {el.text}
        </p>
      </div>
      <HiX onClick={() => delTodo(el.id)} />
    </div>
  );
}

export default TodoItem;
