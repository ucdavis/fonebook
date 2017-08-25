const initialWorkgroups = {
	workgroups: []
}

// The 'state = initialNavigation' is roughly equivalent to 'state = state || initialNavigation'
// If state is undefined, it will be set to initialNavigation, otherwise it will keep its value
export const workgroupReducers = (state = initialWorkgroups, action) => {
	switch (action.type) {
		case 'GET_WORKGROUPS':
			return [{id: 2, name: 'basket weaving'}, {id: 3, name: 'philosophy'}]
		default:
			return state;
	}
}