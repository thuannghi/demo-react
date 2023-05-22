import React from 'react'
import {IProfile} from './type'
import { useImmer } from 'use-immer'
const style = {
	backgroundColor: 'white',
	color: 'black',
	padding: 16,
	margin: '0px 12px'

}
export default function Profile(props: IProfile) {

	const [state, setState] = useImmer({...props, inputName: ''})
	const {name, age, gender, inputName} = state

	function handleSubmit(event) {
		event.preventDefault()
		setState({...state, name: state.inputName})
	}

	function handleOnChangeName(event) {
		setState(state => {state.inputName = event.target.value})
	}

	function handleOnKeyDown(event) {
		if (event.key === 'Enter') {
			setState({...state, name: state.inputName})
		}
	}

	function addAge() {
		setState({...state, age: state.age + 1})
	}

	function minusAge() {
		setState({...state, age: state.age - 1})
	}

	return (
		<div style={style}>
			<img src={props.src} alt="Katherine Johnson"/>
			<p>{name}</p>
			<p>{age}
				<button type={'button'} onClick={addAge}
				>&uarr;</button>
				<button type={'button'} onClick={minusAge}>&darr;</button>
			</p>
			<p>{gender}</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Ten moi : </label>
				<input id="name" style={{marginBottom: 8}} type={'text'} value={inputName} onChange={handleOnChangeName}
					onKeyDown={handleOnKeyDown}
				/>
				<button type={'submit'}>Submit</button>
			</form>
		</div>
	)
}

