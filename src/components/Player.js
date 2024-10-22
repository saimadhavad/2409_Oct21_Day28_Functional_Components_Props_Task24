import React from 'react'

function Player(props) {
  return (
    <div className="playerDiv">
        <img className="imgIPL" src= {props.imageURL}></img>
        <h2>Name : {props.name}</h2>
        <h3>Team : {props.team}</h3>
        <h3>Role : {props.role}</h3>
        </div>
  )
}

export default Player
