import { combineReducers } from 'redux'
import { categoriesCats } from './store'

export default combineReducers({
    categories: categoriesCats,
})