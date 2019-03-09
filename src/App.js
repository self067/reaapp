import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

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
