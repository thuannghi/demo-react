import React, {useState} from 'react'
import './App.css'


const TodoItem = (props: any) => {
	const style = {textDecoration: props.isDone ? 'line-through' : 'none'}
	function deleteTodo() {
		props.setTodo(prevState => prevState.filter(todo => todo.id !== props.id)
		)
	}

	function checkTodo() {
		props.setTodo(prevState => {
			return prevState.map(todo => {
				if (todo.id === props.id) {
					todo.isDone = !props.isDone
				}
				return todo
			})
		})
	}


	return <div className='todo-item' style={{backgroundColor: "black"}}>
		<input type='checkbox' checked={props.isDone} onClick={checkTodo}/>
		<p style={style}>{props.value}</p>

		<button onClick={deleteTodo}>
            Delete
		</button>
	</div>
}

function App() {
	const [arrayTodo, setState] = useState([])

	const addTodo = () => {
		const inputTodoElement = document.getElementById('input-todo') as HTMLInputElement
		const todo = {
			id: new Date().valueOf(),
			value: inputTodoElement.value,
			isDone: false
		}
		setState((prevState) => [...prevState, todo])

		inputTodoElement.value = ''
	}


	// return <Gallery/>\
	return (<div style={{backgroundColor: "gray"}}>
		<h1>Todo list</h1>
		<div className="todo-input-container" >
			<input id='input-todo' type="text"/>
			<button onClick={addTodo}>+</button>
		</div>
		<div className="todo-list-container">
			{arrayTodo.map((todoItem) => {
				return <TodoItem key={todoItem.id} {...todoItem} setTodo={setState}/>
			})}
		</div>
	</div>)
}

export default App

