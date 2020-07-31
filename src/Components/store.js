import { createStore , applyMiddleware } from 'redux'
import allReducers from '../Components/Reducers'

const initialSate = {}

const store = createStore(allReducers, initialSate)

export default store