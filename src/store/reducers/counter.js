import * as actionTypes from '../../actions';

const initialState = {
    counter: 0
}

const reducer = ( state = initialState, action ) => {

    switch (action.type){
        case actionTypes.INCREASE:
            return{...state, counter: state.counter + 1};
        case actionTypes.DECREASE:
            return{...state, counter: state.counter - 1};
        case actionTypes.ADD:
            return{...state, counter: state.counter + action.value};
        case actionTypes.REMOVE:
            return{...state, counter: state.counter - action.value};
    }
    return state;
}

export default reducer;

