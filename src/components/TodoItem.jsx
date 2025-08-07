import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { task, onToggle, onDelete } = this.props;
    return (
      <li className="todo-item">
        <label>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span className={task.completed ? 'completed' : ''}>
            {task.text}
          </span>
        </label>
        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          ✕
        </button>
      </li>
    );
  }
}
