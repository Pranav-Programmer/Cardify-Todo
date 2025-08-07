import React, { Component } from 'react';

export default class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      edits: {
        title: props.task.title,
        body: props.task.body
      }
    };
  }

  startEdit = () => {
    this.setState({
      editing: true,
      edits: {
        title: this.props.task.title,
        body: this.props.task.body
      }
    });
  };

  handleChange = (e) => {
    this.setState({
      edits: {
        ...this.state.edits,
        [e.target.name]: e.target.value
      }
    });
  };

  saveEdit = () => {
    this.props.onUpdate(this.props.task.id, this.state.edits);
    this.setState({ editing: false });
  };

  cancelEdit = () => {
    this.setState({ editing: false });
  };

  markDone = () => {
    this.props.onUpdate(this.props.task.id, { completed: true });
  };

  render() {
    const { task, onDelete } = this.props;
    const { editing, edits } = this.state;
    const cardClass = `card${task.completed ? ' completed-card' : ''}`;

    return (
      <div className={cardClass}>
        {editing ? (
          <>
            <input
              name="title"
              value={edits.title}
              onChange={this.handleChange}
            />
            <textarea
              name="body"
              value={edits.body}
              onChange={this.handleChange}
            />
            <div className="card-footer">
              <button onClick={this.saveEdit}>Save</button>
              <button onClick={this.cancelEdit}>Cancel</button>
            </div>
          </>
        ) : (
          <>
            <h3 className="card-title">{task.title}</h3>
            <p className="card-date">{task.date}</p>
            <p className="card-time">
              {task.timeFrom} → {task.timeTo}
            </p>
            <div className="card-body">
              {task.body.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <div className="card-footer">
              {!task.completed && (
                <button onClick={this.markDone}>Done</button>
              )}
              {!task.completed && (
                <button onClick={this.startEdit}>Edit</button>
              )}
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </>
        )}
      </div>
    );
  }
}
