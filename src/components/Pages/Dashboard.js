import React from 'react'
import data from '../Pages/mockData'
import Table from '../Table'
import { tableConstants } from '../Table-definitions/Employee_Table'

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
			<div className='col-sm-6'>
				<h4>Default Table</h4>
				<Table
					cols={tableConstants(handleEdit)}
					data={props.details.response.data}
					hoverable
				/>
			</div>

			<div className='col-sm-6'>
				<h4>Dark Table</h4>
				<Table
					cols={tableConstants(handleEdit)}
					data={props.details.response.data}
					isDark
				/>
			</div>

			<div className='col-sm-6'>
				<h4>Borderless Table</h4>
				<Table
					cols={tableConstants(handleEdit)}
					data={props.details.response.data}
					bordered={false}
					hoverable
				/>
			</div>

			<div className='col-sm-6'>
				<h4>Striped Table</h4>
				<Table
					cols={tableConstants(handleEdit)}
					data={props.details.response.data}
					striped
					hoverable
				/>
			</div>

			<div className='col-sm-6'>
				<h4>Hoverable Table</h4>
				<Table
					cols={tableConstants(handleEdit)}
					data={props.details.response.data}
					hoverable
					striped
					size="sm"
				/>
			</div>
		</div>
	);
};

export default Dashboard;