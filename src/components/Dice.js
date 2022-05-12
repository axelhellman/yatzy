import React from 'react';

function Dice(props) {

  const styles = {
          backgroundColor: props.hold ? "grey" : "transparent"
      }
return (
  <div className="dice--box"
  style={styles}
  onClick={props.throwDice}>
    <div>
    {props.number}
    </div>

  </div>

)
} export default Dice;
/*
if(props.number===1) {
  return <div className="dice img-1" onClick={props.throwDice}>
  </div>
}
else if (props.number===2) {
  return <div className="dice img-2" onClick={props.throwDice}></div>
} else if(props.number===3){
  return <div className="dice img-3" onClick={props.throwDice}></div>
}else if(props.number===4){
  return <div className="dice img-4" onClick={props.throwDice}></div>
}else if(props.number===5){
  return <div className="dice img-5" onClick={props.throwDice}></div>
}else{
  return <div className="dice img-6" onClick={props.throwDice}></div>
} */
