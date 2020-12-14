import { createStore, combineReducers } from 'redux';
import filters from './reducers/filters';
import pizzas from './reducers/pizzas';


const rootReducer = combineReducers ({
    filters,
    pizzas,
})


const store = createStore(rootReducer);




export default store;