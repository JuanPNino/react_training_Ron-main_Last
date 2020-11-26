import Axios from 'axios';

const axiosFMInstance = Axios.create({
	baseURL:
	'https://masku.i-process.nl/fmi/data/vLatest/databases/',
});

let token = '';



async function getToken(database) {
	var username = 'admin';
	var password = '4caitlin';
	var basicAuth = 'Basic ' + btoa(username + ':' + password);
	return await axiosFMInstance
		.post(
			database + '/sessions',
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: basicAuth,
					'Access-Control-Allow-Origin': '*',
				},
			}
		)
		.then(function (response) {
			return response.data.response.token;
		})
		.catch(function (error) {
			console.log('Error on Authentication');
			console.log(error);
			return error;
		});
}

export default {
	getList: {
		async getList(payload) {
			var database = payload.database;
			var layout = payload.layout;
			await getToken(database)
				.then((response) => {
					token = response;
				})
				.catch((error) => {
					console.log('we had an error');
				});
			return await axiosFMInstance
				.get( database + '/layouts/' + layout + '/records', {
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer ' + token,
					},
				})
				.then(function (response) {
					return response;
				})
				.catch(function (error) {
					return error;
				});
		},
	},
};
