import { workgroupReducers } from './workgroupReducers';

export function rootReducer (state = {}, action) {

	// The returned object is the new state
	return {
		workgroups: workgroupReducers(state.workgroups, action)
	}
}