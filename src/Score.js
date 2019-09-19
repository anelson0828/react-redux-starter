import React from 'react'
import { connect } from 'react-redux';
import { addPoint } from './redux';

const DisconnectedScore = (props) => {

  const scorePoints = () => {
    if(props.player1 === props.player2) {
      alert('tie!')
    }
    //paper beats rock
    //rock beats scissors
    //scissors beats paper
    const rules = {
      paper: 'rock',
      rock: 'scissors',
      scissors: 'paper'
    }
    if(rules[props.player1] === props.player2) {
      props.addPoint('player1')
      alert('point to player 1!')
    }
    if(rules[props.player2] === props.player1) {
      props.addPoint('player2')
      alert('point to player 2!')
    }
  }
  return (
      <div>
        <button
          onClick={scorePoints}
        >
          Score!
       </button>
        <p>Player 1: {props.player1Score}</p>
        <p>Player 2: {props.player2Score}</p>
      </div>
  )
 }

const mapState = state => {
  return {
    player1: state.currentSelection.player1,
    player2: state.currentSelection.player2,
    player1Score: state.player1,
    player2Score: state.player2
  };
};

const mapDispatch = (dispatch) => {
  return {
    addPoint: (player) => dispatch(addPoint(player)),
  };
};

export default
  connect(
    mapState,
    mapDispatch
  )(DisconnectedScore)
