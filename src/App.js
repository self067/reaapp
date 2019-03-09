import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<div class="wrapper">
			<SayFullName name="Oleg" surname="Kuzmin" link="vk.com/self67"/>
			<SayFullName name="Anton" surname="Kuzmin" link="vk.com/self67"/>
			<SayFullName name="Alex" surname="Kuzmin" link="vk.com/self67"/>
		</div>

    );
  }
}


function SayFullName(props){
	return (
		<div>
		<h1>My name is {props.name} {props.surname}</h1>
		<a href={props.link}>Ссылка на профиль</a>
		</div>
	)

}




export default App;
