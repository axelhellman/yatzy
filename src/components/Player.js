import React from 'react'

function Player(props) {
  console.log(props)
    return (
      <div>
        <h1>Add players</h1>
        <form onSubmit={props.addPlayers}>
            <input
                type="text"
                placeholder="Add players"
                onChange={props.handleChange}
                value={props.value.players}
                name="players"
            />
            </form>
        <button className="add--players-button" onClick={props.addPlayers} > START </button>

      </div>
    )
} export default Player;
