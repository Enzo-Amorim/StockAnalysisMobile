import { createStore } from 'redux'

const STOCKS_STATE = {
    stocks: [
    ],
}

function stocks(state = STOCKS_STATE, action) {
    switch(action.type) {
        case 'ADD_STOCK' :
            return { ...state, stocks: [...state.stocks, action.stock]};
        case 'REMOVE_STOCK' :
            return { ...state, stocks: state.stocks.filter(stocks => stocks !== action.stock)}
        case 'REMOVE_ALL' :
            return { ...state, stocks: []}
        default:
            return state;
    }
}

const store = createStore(stocks)

export default store;