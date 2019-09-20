import { combineReducers } from 'redux';
import C from '../constants';


const productInformationReducer = (state={
  name:'',
  isLoading: false,
  nutrients: [],
  productInformation: {},
}, action) => {
  switch (action.type) {
    case C.FIND_PRODUCT:
      return {
        ...state,
        isLoading: true,
        name:action.name
      }
    case C.RECEIVED_PRODUCT:
      return {
        name: action.name,
        isLoading:false,
        nutrients: action.nutrients,
        productInformation: action.productInformation,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({productInformationReducer})

export default rootReducer;