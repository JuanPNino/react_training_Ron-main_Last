import React from 'react'
/*import data from '../Pages/mockData'*/
import Table from '../Table'
import { tableConstants } from '../Table-definitions/Employee_Table';
import {Container, Row, Col, } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';



const Dashboard_Employee = (props) => {
	const handleEdit = (item) => () => {
		console.log(
			'data to be looked at:',
			JSON.stringify(props.details.response.data)
		);
		alert(JSON.stringify(item));
	};
	return (
	<div>
		<Container fluid>
			<Row>
				<Col lg={3}>
					<Row>
						<ListGroup>
							<ListGroup.Item>Home</ListGroup.Item>
							<ListGroup.Item>Features</ListGroup.Item>
							<ListGroup.Item>Pricing</ListGroup.Item>
						</ListGroup>
					</Row>
				</Col>
				<Col lg={5}>
					<h4>Employee</h4>
					<Table
						cols={tableConstants(handleEdit)}
						data={props.details.response.data}
						hoverable
					/>
				</Col>
			</Row>
		</Container>
	</div>
	);
};

export default Dashboard_Employee;