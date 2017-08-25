import { getWorkgroups } from './../api/api';

export function getWorkgroupsData() {

	return function(dispatch, getState) {
		dispatch(initiateProcess());

		getWorkgroups()
			.then(function(data) {
				dispatch(successProcess(data));
			})
			.catch(function(error) {
				console.log("error")
				console.log(error)
				//dispatch(fetchFailed());
			});
	};
}

export function initiateProcess() {
	return {
		type: 'INITIATE_PROCESS'	}
}

export function successProcess(items) {
	console.log("request success")
	console.log(items)

	return {
		type: 'SUCESS_PROCESS',
		items: items
	}
}