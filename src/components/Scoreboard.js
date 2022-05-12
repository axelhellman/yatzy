
import React from 'react'

function Scoreboard(props) {
  const styles = {
          backgroundColor: props.on ? "transparent" : "grey"
      }
    const styles_matched = {
      backgroundColor: "transparent"
        }
  
  return(
    <div className="scoreboard">

    <table className="scoreboard--table">
     <tbody>
     <tr>
       <th>SPELARE: </th>
       <td>1</td>
     </tr>
     <tr>
       <th>ETTOR</th>
       <td onMouseEnter={props.scoreboardHover}
         onMouseLeave={props.scoreboardHoverLeave}
         onClick={props.saveScore}
         style= {props.score1.ones.clicked ? styles: styles_matched}
           id="1"> {props.hover ? props.hoverScore.ones : props.score1.ones.value}
           </td>
     </tr>
     <tr>
       <th>TVÅOR</th>
       <td onMouseEnter={props.scoreboardHover}
       onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.twos.clicked ? styles: styles_matched}
       id="2"> {props.hover ?  props.hoverScore.twos : props.score1.twos.value}
       </td>
     </tr>
     <tr>
       <th>TREOR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="3"onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.threes.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.threes : props.score1.threes.value}
       </td>
     </tr>
     <tr>
       <th>FYROR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="4"onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.fours.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.fours : props.score1.fours.value}
       </td>
     </tr>
     <tr>
       <th>FEMMOR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="5"onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.fives.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.fives : props.score1.fives.value}
       </td>
     </tr>
     <tr>
       <th>SEXOR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="6" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.six.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.six : props.score1.six.value}
       </td>
     </tr>
     <tr>
       <th>SUMMA</th>
       <td id="7" >
       {props.score1.sum1.clicked ? props.score1.sum1.value : 0}
       </td>
     </tr>
     <tr>
       <th>BONUS</th>
       <td
       id="8">
       {props.score1.bonus.clicked ? props.score1.bonus.value : 0}</td>
     </tr>
     <tr>
       <th>ETT PAR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="9" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.pair.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.pair : props.score1.pair.value} </td>
     </tr>
     <tr>
       <th>TVÅ PAR</th>
       <td onMouseEnter={props.scoreboardHover}
       id="10" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.two_pair.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.two_pair : props.score1.two_pair.value} </td>
     </tr>
     <tr>
       <th>TRETAL</th>
       <td onMouseEnter={props.scoreboardHover}
       id="11" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.three_of_a_kind.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.three_of_a_kind : props.score1.three_of_a_kind.value} </td>
     </tr>
     <tr>
       <th>FYRTAL</th>
       <td onMouseEnter={props.scoreboardHover}
       id="12" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.four_of_a_kind.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.four_of_a_kind : props.score1.four_of_a_kind.value} </td>
     </tr>
     <tr>
       <th>LITEN STEGE</th>
       <td onMouseEnter={props.scoreboardHover}
       id="13" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.small_straight.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.small_straight : props.score1.small_straight.value} </td>
     </tr>
     <tr>
       <th>STOR STEGE</th>
       <td onMouseEnter={props.scoreboardHover}
       id="14" onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.straight.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.straight : props.score1.straight.value} </td>
     </tr>
     <tr>
       <th>KÅK</th>
       <td
       onMouseEnter={props.scoreboardHover}
       onMouseLeave={props.scoreboardHoverLeave}
       id="15"
       onClick={props.saveScore}
       style= {props.score1.full_house.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.full_house : props.score1.full_house.value} </td>
     </tr>
     <tr>
       <th>CHANS</th>
       <td
       id="16"
       onMouseEnter={props.scoreboardHover}
       onMouseLeave={props.scoreboardHoverLeave}
       onClick={props.saveScore}
       style= {props.score1.chance.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.chance : props.score1.chance.value}</td>
     </tr>
     <tr>
       <th>YATZY</th>
       <td
       onMouseEnter={props.scoreboardHover}
       onMouseLeave={props.scoreboardHoverLeave}
       id="17"
       onClick={props.saveScore}
       style= {props.score1.yatzy.clicked ? styles: styles_matched}>
       {props.hover ?  props.hoverScore.yatzy : props.score1.yatzy.value}</td>
     </tr>
     <tr>
       <th>TOTAL SCORE</th>
       <td
       id="8">
       {props.score1.totalSum.show ? props.score1.totalSum.value : 0}</td>
     </tr>
   </tbody>
</table>

    </div>

  )
} export default Scoreboard;
/*
onMouseEnter={props.scoreboardHover}
onMouseLeave={props.scoreboardHoverLeave}
onClick={props.saveScore}
style= {props.matched ? styles: styles_matched}

onMouseEnter={props.scoreboardHover}
onMouseLeave={props.scoreboardHoverLeave}
onClick={props.saveScore}
style= {props.matched ? styles: styles_matched}

<tr>
  <th>SPELARE: </th>
  <td>1</td>
</tr>
<tr>
  <th>ETTOR</th>
  <td onMouseEnter={props.scoreboardHover}
    onMouseLeave={props.scoreboardHoverLeave}
    onClick={props.saveScore}
    style= {props.matched ? styles: styles_matched}
      id="1"> {props.hover ? props.hoverScore.ones : props.score1.ones.value}
      </td>
</tr>
<tr>
  <th>TVÅOR</th>
  <td onMouseEnter={props.scoreboardHover}
  onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}
  id="2"> {props.hover ?  props.hoverScore.twos : props.score1.twos.value}
  </td>
</tr>
<tr>
  <th>TREOR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="3"onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.threes : props.score1.threes.value}
  </td>
</tr>
<tr>
  <th>FYROR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="4"onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.fours : props.score1.fours.value}
  </td>
</tr>
<tr>
  <th>FEMMOR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="5"onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.fives : props.score1.fives.value}
  </td>
</tr>
<tr>
  <th>SEXOR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="6" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.six : props.score1.six.value}
  </td>
</tr>
<tr>
  <th>SUMMA</th>
  <td id="7" >
  SUMMA</td>
</tr>
<tr>
  <th>BONUS</th>
  <td
  id="8">
  bonus</td>
</tr>
<tr>
  <th>ETT PAR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="9" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.pair : props.score1.pair.value} </td>
</tr>
<tr>
  <th>TVÅ PAR</th>
  <td onMouseEnter={props.scoreboardHover}
  id="10" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.two_pair : props.score1.two_pair.value} </td>
</tr>
<tr>
  <th>TRETAL</th>
  <td onMouseEnter={props.scoreboardHover}
  id="11" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.three_of_a_kind : props.score1.three_of_a_kind.value} </td>
</tr>
<tr>
  <th>FYRTAL</th>
  <td onMouseEnter={props.scoreboardHover}
  id="12" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.four_of_a_kind : props.score1.four_of_a_kind.value} </td>
</tr>
<tr>
  <th>LITEN STEGE</th>
  <td onMouseEnter={props.scoreboardHover}
  id="13" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.small_straight : props.score1.small_straight.value} </td>
</tr>
<tr>
  <th>STOR STEGE</th>
  <td onMouseEnter={props.scoreboardHover}
  id="14" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.straight : props.score1.straight.value} </td>
</tr>
<tr>
  <th>KÅK</th>
  <td onMouseEnter={props.scoreboardHover}
  id="15" onMouseLeave={props.scoreboardHoverLeave}
  onClick={props.saveScore}

  style= {props.matched ? styles: styles_matched}>
  {props.hover ?  props.hoverScore.full_house : props.score1.full_house.value} </td>
</tr>
<tr>
  <th>CHANS</th>
  <td
  id="16"
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  chans</td>
</tr>
<tr>
  <th>YATZY</th>
  <td
  id="17"
  onClick={props.saveScore}
  style= {props.matched ? styles: styles_matched}>
  yatzy</td>
</tr>
*/
