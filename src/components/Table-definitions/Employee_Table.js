import React from 'react';


// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
	return [
		{
			title: 'Product ID',
			render: (rowData) => {
				return <span>{rowData.fieldData.productId}</span>;
			},
		},
		{
			title: 'Product Description',
			render: (rowData) => {
				return <span>{rowData.fieldData.productDescription}</span>;
			},
		},
		{
			title: 'Action',
			render: (rowData) => {
				return (
					<button className='btn btn-warning' onClick={handleEdit(rowData)}>
						Edit
					</button>
				);
			},
		},
		/* {
			title: 'First Name',
			render: (rowData) => {
				return <span>{rowData.first}</span>;
			},
		},
		{
			title: 'Last Name',
			render: (rowData) => {
				return <span>{rowData.last}</span>;
			},
		},
		{
			title: 'Action',
			render: (rowData) => {
				return (
					<button className='btn btn-warning' onClick={handleEdit(rowData)}>
						Edit
					</button>
				);
			},
		}, */
	];
};
