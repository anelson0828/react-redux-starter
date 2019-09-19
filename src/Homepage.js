import React from 'react'
import PlayerBox from './PlayerBox'
import Score from './Score'

const Homepage = () => {
  return (
    <div style={{width: "100%"}}>
      <header>Welcome to Rock Game!</header>
        <div style={{display: "flex", justifyContent: "center"}}>
          <PlayerBox playerNumber={1}/>
          <PlayerBox playerNumber={2}/>
        </div>
        <Score />
    </div>
  )
 }

export default Homepage
