import React, { Component } from 'react';

// import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

const Repair = styled.div`
	color: #fff;
	font-size: 40px;
	font-weight: 700;
	line0height: 50px;
	
	span {
		font-size: 24px;
		line0height: 30px;
	}

`

const LightText = styled.div`
	color: #fff;
	font-size: 18px;
	font-weight: 300;
	line0height: 28px;
	margin-top: 54px;

`
const CallBtn = styled.button`
	width: 247px;
	height: 67px;
	margin-top: 32px;
	background-color: #ffa14b;
	border-radius: 30px;
	color: #fff;
	font-family: Roboto;
	font-size: 18px;
	font-weight: bold;
`


class Main extends React.Component {
	render(){
		return(
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span>ipphone за 35минут и гарантия 1 год</span>
					</Repair>
					<LightText>
						Оставьте заявку на бесплатную диагностику без очерреди, и получите защитное стекло, стоимостью 1000руб с установкой в подарок!
					</LightText>
					<CallBtn>Отправить заявку!</CallBtn>
				</Col>
				<Col lg={6} offset={1}>
					
				</Col>
			</Row>

		)
	}
}

export default Main
