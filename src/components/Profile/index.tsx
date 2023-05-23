import React from 'react'
import {IProfile} from './type'
import {useImmer} from 'use-immer'

const style = {
	backgroundColor: 'white',
	color: 'black',
	padding: 16,
	margin: '0px 12px'

}
export default function Profile(props: IProfile) {
	const [state, setState] = useImmer({...props, inputName: '', lastName: '', firstName: ''})
	const {name, age, gender, inputName,lastName,firstName} = state
	function handleSubmit(event) {
		event.preventDefault()
		setState({...state, name: state.inputName})
	}

	function handleOnChangeName(event) {
		switch (event.target.id) {
		case 'name': {
			setState(state => {
				state.inputName = event.target.value
			})
			break
		}
		case 'lastName': {
			setState(state => {
				state.lastName = event.target.value
			})
			break
		}
		case 'firstName': {
			setState(state => {
				state.firstName = event.target.value
			})
			break
		}
		default: 
			break
		}
		
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
				<div>
					<label htmlFor="name">Ten moi : </label>
					<input id="name" style={{marginBottom: 8}} type={'text'} value={inputName}
						onChange={handleOnChangeName}
						onKeyDown={handleOnKeyDown}
					/>
				</div>
				<div>
					<label htmlFor="firstName">Ho : </label>
					<input id="firstName" style={{marginBottom: 8}} type={'text'} value={firstName}
						onChange={handleOnChangeName}
						onKeyDown={handleOnKeyDown}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Ten : </label>
					<input id="lastName" style={{marginBottom: 8}} type={'text'} value={lastName}
						onChange={handleOnChangeName}
						onKeyDown={handleOnKeyDown}
					/>
				</div>
				<p>Full name: {lastName} {firstName} </p>
				<button type={'submit'}>Submit</button>
			</form>
		</div>
	)
}
