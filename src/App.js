import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: 'light' };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light'
    }));
  };

  render() {
    return (
      <div className={`app ${this.state.theme}`}>
        <header className="app-header">
          <h1>My To-Do Cards</h1>
          <button
            className="theme-toggle"
            onClick={this.toggleTheme}
            aria-label="Toggle theme"
          >
            {this.state.theme === 'light' ? '🌙' : '☀️'}
          </button>
        </header>
        <TodoList />
      </div>
    );
  }
}
