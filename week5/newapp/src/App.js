/* eslint-disable */
import React, { useState, useEffect } from "react";
import "./App.css";

function Task({ task, index, completeTask, removeTask, all, active }) {
  if (all) {
    return (
      <ul className="todo-list">
        <li>
          <div
            className="view"
            style={{
              textDecoration: task.completed ? "line-through" : "",
            }}
          >
            <input
              className="toggle"
              type="checkbox"
              checked={task.completed}
              onClick={() => completeTask(index)}
            />
            <label>{task.title}</label>
            <button className="destroy" onClick={() => removeTask(index)} />
          </div>
        </li>
      </ul>
    );
  } else if (active) {
    return (
      <ul className="todo-list">
        <li>
          <div
            className="view"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
            hidden={task.completed}
          >
            <input
              className="toggle"
              type="checkbox"
              checked={task.completed}
              onClick={() => completeTask(index)}
            />
            <label disable={task.completed}>{task.title}</label>
            <button className="destroy" onClick={() => removeTask(index)} />
          </div>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="todo-list">
        <li>
          <div
            className="view"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
            hidden={!task.completed}
          >
            <input
              className="toggle"
              type="checkbox"
              checked={task.completed}
              onClick={() => completeTask(index)}
            />
            <label disable={task.completed}>{task.title}</label>
            <button className="destroy" onClick={() => removeTask(index)} />
          </div>
        </li>
      </ul>
    );
  }
}

function CreateTask({ addTask }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={value}
        placeholder="What needs to be done?"
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />
    </form>
  );
}
function App() {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [checked, setChecked] = useState(false);

  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true,
    },
    {
      title: "Do your workout",
      completed: true,
    },
    {
      title: "Hangout with friends",
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length);
  });

  const changeAll = () => {
    setAll(!all);
    if (active) setActive(!active);
    if (completed) setCompleted(!completed);
  };
  const changeActive = () => {
    setActive(!active);
    if (all) setAll(!all);
    if (completed) setCompleted(!completed);
  };
  const changeCompleted = () => {
    setCompleted(!completed);
    if (active) setActive(!active);
    if (all) setAll(!all);
  };

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = (index) => {
    const newTasks = [...tasks];
    if (newTasks[index].completed) newTasks[index].completed = false;
    else newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const completeAllTask = (tasks) => {
    setChecked(!checked);
    const newTasks = [...tasks];
    if (!checked)
      newTasks.forEach((element) => {
        if (!element.completed) element.completed = true;
      });
    else
      newTasks.forEach((element) => {
        if (element.completed) element.completed = false;
      });
    setTasks(newTasks);
  };

  const deleteAllCompleteTask = (tasks) => {
    const newTasks = [...tasks];
    newTasks.forEach((element) => {
      let index = tasks.indexOf(element);
      if (element.completed) tasks.splice(index, 1);
    });
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <div className="create-task">
          <CreateTask addTask={addTask} />
        </div>
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" checked={checked} />
        <label onClick={() => completeAllTask(tasks)}>
          Mark all as complete
        </label>

        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
            all={all}
            active={active}
          />
        ))}
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong> {tasksRemaining} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a className={all ? "selected" : null} onClick={changeAll}>
              All
            </a>
          </li>
          <li>
            <a className={active ? "selected" : null} onClick={changeActive}>
              Active
            </a>
          </li>
          <li>
            <a
              className={completed ? "selected" : null}
              onClick={changeCompleted}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() =>
            deleteAllCompleteTask(tasks.filter((task) => !task.completed))
          }
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default App;
