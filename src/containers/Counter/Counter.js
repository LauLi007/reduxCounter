import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions';



class Counter extends Component {
    render(){
        return(
            <div>
                <h1>Your score is: {this.props.ctr} </h1>
                <div>
                    <button onClick={this.props.onIncreaseCounter}>Add 1</button>
                    <button onClick={this.props.onDecreaseCounter}>Remove 1</button>
                    <button onClick={this.props.addCounter}>Add 5</button>
                    <button onClick={this.props.removeCounter}>Remove 5</button>
                    <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button>

                    <ul>
                        {this.props.storedResult.map(item => (
                            <li key={item.id} onClick={() => this.props.onDeleteCounter(item.id)}>{item.value}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.results.results
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIncreaseCounter: () => dispatch({type: actionTypes.INCREASE}),
        onDecreaseCounter: () => dispatch({type: actionTypes.DECREASE}),
        addCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        removeCounter: () => dispatch({type: actionTypes.REMOVE, value: 5}),
        onStoreCounter: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteCounter: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementId: id})
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);