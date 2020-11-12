import React from 'react'
import data from '../Pages/mockData'
import Table from '../Table'
import { tableConstants } from '../Table-definitions/Employee_Table';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'

const Dashboard = (props) => {
	const handleEdit = (item) => () => {
		console.log(
			'data to be looked at:',
			JSON.stringify(props.details.response.data)
		);
		alert(JSON.stringify(item));
	};

	return (
		<div className='row'>
			<Container>
				<Row>
					<div className='col-sm-6'>
						<h4>Default Table</h4>
						<Table
							cols={tableConstants(handleEdit)}
							data={props.details.response.data}
							hoverable
						/>
					</div>
				</Row>
				<Row xs={1} md={2}>
					<div className='col-sm-6'>
						<h4>Dark Table</h4>
						<Table
							cols={tableConstants(handleEdit)}
							data={props.details.response.data}
							isDark
						/>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default Dashboard;