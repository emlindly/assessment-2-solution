import React from "react";
import { useDispatch } from "react-redux";
import { Check, Trash } from "react-bootstrap-icons";
import { completeTask, removeTask } from "../state/taskList/taskListSlice";

const ToDo = (props) => {
  const dispatch = useDispatch();
  const { todo, index } = props;

  return (
    <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      <p>{todo.description}</p>
      <Check onClick={() => dispatch(completeTask(index))} />
      <Trash onClick={() => dispatch(removeTask(index))} />
    </div>
  );
};

export default ToDo;
