import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
	constructor() {
		super();
		this.onAddClickHandler = this.onAddClickHandler.bind(this);
		this.onTodoClickHandler = this.onTodoClickHandler.bind(this);
		this.onFilterChangeHandler = this.onFilterChangeHandler.bind(this);
		this.state = {
			filter: 'SHOW_ALL',
			todos: [{
				text: 'Use Redux',
				completed: true
			}, {
				text: 'Learn to connect it to React',
				completed: false
			}]
		};
	}

	onAddClickHandler(text) {
		this.setState({todos: [...this.state.todos, {text, completed: false}]});
	}

	onTodoClickHandler(index) {
		this.setState({todos: this.state.todos.map((todo, i) => {
			if(i == index) {
				return Object.assign({}, todo, {completed: !todo.completed});
			}

			return todo;
		})});
	}

	onFilterChangeHandler(filter) {
		this.setState({filter});
	}

	render() {
		return (
			<div>
				<AddTodo
					onAddClick={this.onAddClickHandler} />
				<TodoList
					filter={this.state.filter}
					todos={this.state.todos}
					onTodoClick={this.onTodoClickHandler} />
				<Footer
					filter={this.state.filter}
					onFilterChange={this.onFilterChangeHandler} />
			</div>
		);
	}
}