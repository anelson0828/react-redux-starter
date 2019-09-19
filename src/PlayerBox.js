import React from 'react'
import paper from './paper.jpg'
import rock from './rock.jpg'
import scissors from './scissors.jpeg'
import { connect } from 'react-redux';
import { updateSelection } from './redux';

const DisconnectedPlayerBox = (props) => {
  const player = `player${props.playerNumber}`
  const images = {
    paper,
    rock,
    scissors
  }
  let currentImage = ''
  if (player === 'player1') {
     currentImage = images[props.player1]
  } else {
     currentImage = images[props.player2]
  }
  const handleClick = (type) => {
      props.updateSelection(props.playerNumber, type)
  }
  return (
    <div style={{margin: "10px"}}>
      <header>Player {props.playerNumber}</header>
        <div style={{height: "200px", width: "200px", border: "5px solid white"}}>
         <img src={currentImage}  style={{height: "200px", width: "200px"}} alt=''/>
        </div>
      <div>
        <button
          onClick={() => handleClick("rock")}
        >
          Rock
        </button>
           <button
          onClick={() => handleClick("paper")}
        >
          Paper
        </button>
          <button
          onClick={() => handleClick("scissors")}
        >
        Scissors
       </button>
      </div>
    </div>
  )
 }

const mapState = state => {
  return {
    player1: state.currentSelection.player1,
    player2: state.currentSelection.player2
  };
};

const mapDispatch = (dispatch) => {
  return {
    updateSelection: (player, selection) => dispatch(updateSelection(player, selection)),
  };
};

export default
  connect(
    mapState,
    mapDispatch
  )(DisconnectedPlayerBox)
