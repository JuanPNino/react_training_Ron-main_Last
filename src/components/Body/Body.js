import React, { useState } from 'react';
import styles from './body.module.css';
import ApiFM from '../ApiFM/ApiFM';
import ApiOutputList from './apiOutputList';



const BodyApi = (props) => {
	const [data, setData] = useState('No Data present!');
	const [apiError, setApiError] = useState('');

	let displayDetails = null;





	async function FMGetList() {
		try {
			const payload = { layout: 'Products', database: 'Contacts_React' };
			const response = await ApiFM.getList.getList(payload);
			setData(response);
			setApiError('');
		} catch (error) {
			if (error.response) {
				await setApiError(error.response);
			} else if (error.request) {
				await setApiError(error.request);
			} else {
				await setApiError(error.message);
			}
		}
	}

	return (
		<div className={styles.backg}>
			<div>This is a Body</div>
			<button onClick={FMGetList}>
				Load Data
			</button>
			<p>Data: {displayDetails}</p>
			<ApiOutputList details={data} apiError={apiError} />
		</div>
	);
};

export default BodyApi;
