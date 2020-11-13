import React from 'react';
import styles from './header.module.css';
import {Container, Row, Col, } from 'react-bootstrap';

const header = (props) => (
	<div className={styles.backg}>
		<Container>
			<Row>
				<Col> Menu</Col>
				<Col> Menu 1</Col>
				<Col> Menu 2</Col>
			</Row>
		</Container>
	</div>
);
export default header;
