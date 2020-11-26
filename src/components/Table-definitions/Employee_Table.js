import React from 'react';


// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit) => {
	return [
		{
			title: 'First Name',
			render: (rowData) => {
				return <span>{rowData.fieldData.first}</span>;
			},
		},
		{
			title: 'Last Name',
			render: (rowData) => {
				return <span>{rowData.fieldData.last}</span>;
			},
		},
	];
};
