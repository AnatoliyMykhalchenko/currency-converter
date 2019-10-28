const initialState = {
	currencies: [],
	constCurrencies: [],
	changedValue: '',
	firstCurrency: '',
	secondCurrency: '',
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'SHOW_CURRENCIES':
			return state = {...state,
				currencies: action.payload,
				constCurrencies: action.payload,
				firstCurrency: action.payload[0].rate,
				secondCurrency: action.payload[0].rate,
			};
		case 'SEARCH_CURRENCIES':
			return state = {
				...state,
				currencies: state.constCurrencies.filter(item => item.txt.toLowerCase().includes(action.payload.toLowerCase()))
			};
		case 'CHANGE_CURRENCY':
			return state = {
				...state,
				changedValue: action.payload * state.firstCurrency / state.secondCurrency
			};
		case 'SET_FIRST_CURRENCY':
			return state = {
				...state,
				firstCurrency: action.payload 
			};
		case 'SET_SECOND_CURRENCY':
			return state = {
				...state,
				secondCurrency: action.payload  
			};
		default:
			return state;

	}
}