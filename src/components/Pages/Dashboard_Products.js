import React from 'react'
/*import data from '../Pages/mockData'*/
import Table from '../Table'
import { tableConstants } from '../Table-definitions/Products_Table';
import {Container, Row, Col, } from 'react-bootstrap';


const Dashboard_Products = (props) => {
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
				<Col lg={1}> Menu
					<Row><p></p> </Row>
					<Row>
						Inicio
					</Row>
					<Row><p></p> </Row>
					<Row>
						Clientes
					</Row>
					<Row><p></p> </Row>
					<Row>
						Productos
					</Row>
					<Row><p></p> </Row>
					<Row>
						Cerrar
					</Row>
				</Col>
				<Col lg={5}>
					<h4>Products</h4>
                    <Table
                        cols={tableConstants(handleEdit)}
                        data={props.details.response.data}
                        hoverable
                    />
				</Col>
			</Row>
			<Row></Row>
		</Container>
	</div>
	);
};

export default Dashboard_Products;