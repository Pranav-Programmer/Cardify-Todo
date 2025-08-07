import React, { Component } from 'react';
import TodoCard from './TodoCard';

const STORAGE_KEY = 'todo_app_items';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
      title: '',
      body: '',
      date: '',
      timeFrom: '',
      timeTo: ''
    };
  }

  save = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    this.setState({ tasks });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTask = () => {
    const { title, body, date, timeFrom, timeTo, tasks } = this.state;
    if (!title.trim() || !body.trim() || !date || !timeFrom || !timeTo) return;

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      body: body.trim(),
      date,
      timeFrom,
      timeTo,
      completed: false
    };
    this.save([newTask, ...tasks]);
    this.setState({ title: '', body: '', date: '', timeFrom: '', timeTo: '' });
  };

  updateTask = (id, updates) => {
    const tasks = this.state.tasks.map(t =>
      t.id === id ? { ...t, ...updates } : t
    );
    this.save(tasks);
  };

  deleteTask = (id) => {
    this.save(this.state.tasks.filter(t => t.id !== id));
  };

  render() {
    const { title, body, date, timeFrom, timeTo, tasks } = this.state;
    return (
      <div className="todo-page">
        <div className="form-row">
          <input
            name="title"
            placeholder="Title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            name="body"
            placeholder="Body"
            value={body}
            onChange={this.handleChange}
          />
          <div className="time-inputs">
            <label>
              Date
             <input
            type="date"
            name="date"
            value={date}
            onChange={this.handleChange}
          />
            </label>
            <label>
              From <input
                type="time"
                name="timeFrom"
                value={timeFrom}
                onChange={this.handleChange}
              />
            </label>
            <label>
              To <input
                type="time"
                name="timeTo"
                value={timeTo}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button onClick={this.addTask}>Add Task</button>
        </div>

        <div className="cards-grid">
          {tasks.map(task => (
            <TodoCard
              key={task.id}
              task={task}
              onUpdate={this.updateTask}
              onDelete={this.deleteTask}
            />
          ))}
        </div>
          {tasks.length === 0 && (
            <p className="empty">No tasks yet. Add one above!</p>
          )}
      </div>
    );
  }
}
