import React from 'react';
import Header from './components/Header'
import Dice from './components/Dice'
import Scoreboard from './components/Scoreboard'
//import Player from './components/Player'


function App() {
  const [dice, setDice] = React.useState(makeDice());
  const [hover, setHover] = React.useState(false);
  //const [playerAmount, setPlayerAmount] = React.useState({players:0});
  const [throwAmount, setThrowAmount] = React.useState(3);

  const [score1, setScore1] = React.useState({
        ones: {
          value: 0,
          clicked:false,
        },
        twos:  {
          value: 0,
          clicked:false,
        },
        threes:  {
          value: 0,
          clicked:false,
        },
        fours:  {
          value: 0,
          clicked:false,
        },
        fives:  {
          value: 0,
          clicked:false,
        },
        six:  {
          value: 0,
          clicked:false,
        },
        sum1:  {
          value: 0,
          clicked:false,
          show: true
        },
        bonus: {
          value: 0,
          clicked:false,
        },
        pair:  {
          value: 0,
          clicked:false,
        },
        two_pair: {
          value: 0,
          clicked:false,
        },
        three_of_a_kind:  {
          value: 0,
          clicked:false,
        },
        four_of_a_kind:  {
          value: 0,
          clicked:false,
        },
        full_house:  {
          value: 0,
          clicked:false,
        },
        small_straight:  {
          value: 0,
          clicked:false,
        },
        straight: {
          value: 0,
          clicked:false,
        },
        chance:  {
          value: 0,
          clicked:false,
        },
        yatzy: {
          value: 0,
          clicked:false,
        },
        totalSum: {
          value: 0,
          show: false,
          flag: true,
        }
      })

    const [hoverScore, setHoverScore] = React.useState({
          ones: 0,
          twos: 0,
          threes: 0,
          fours: 0,
          fives: 0,
          six: 0,
          sum1: 0,
          bonus:0,
          pair: 0,
          two_pair:0,
          three_of_a_kind: 0,
          four_of_a_kind: 0,
          full_house: 0,
          small_straight: 0,
          straight:0,
          chance: 0,
          yatzy:0,
    })

  function makeDice() {
    const diceArr = []
    for(let i = 0; i < 5; i++){
        const newDie = {
            id: i+1,
            hold: false,
            number: 0,
            a:{
              ab:false
            }// Math.ceil(Math.random() * 6),
        }
        diceArr.push(newDie)
      }
      return(diceArr)
    }
    console.log(dice)
    function countDiceValue() {
      const scoreArray= dice.map(die => die.number)

      const counts = {}
      scoreArray.forEach((value) => {
        counts[value] = (counts[value] || 0) + 1;
      });
      return counts
    }

    // TODO: add end state
    React.useEffect(() => {

      if (score1.ones.clicked && score1.twos.clicked && score1.threes.clicked && score1.fours.clicked && score1.fives.clicked && score1.six.clicked && score1.sum1.show){
        const sumOfDie = score1.ones.value + score1.twos.value + score1.threes.value + score1.fours.value + score1.fives.value + score1.six.value
        setScore1(prevScore1 => ({...prevScore1,sum1:{...prevScore1.sum1, value:sumOfDie, clicked:true, show:false}}))
        if (sumOfDie >= 63){
          setScore1(prevScore1 => ({...prevScore1,bonus:{...prevScore1.bonus, value:50, clicked:true}}))
        }

      }
      if (score1.ones.clicked && score1.twos.clicked && score1.threes.clicked && score1.fours.clicked && score1.fives.clicked && score1.six.clicked && score1.sum1.clicked && score1.pair.clicked && score1.two_pair.clicked && score1.three_of_a_kind.clicked && score1.four_of_a_kind.clicked && score1.small_straight.clicked && score1.straight.clicked && score1.full_house.clicked && score1.chance.clicked && score1.yatzy.clicked && score1.totalSum.flag){
        const totalScore = score1.sum1.value + score1.bonus.value + score1.pair.value + score1.two_pair.value + score1.three_of_a_kind.value + score1.four_of_a_kind.value + score1.small_straight.value + score1.straight.value + score1.full_house.value + score1.chance.value + score1.yatzy.value
        setScore1(prevScore1 => ({...prevScore1,totalSum:{...prevScore1.totalSum, show:true, value:totalScore, flag:false}}))
      }



  }, [score1])



  function diceValueCheck() {
    const valueCheck=dice.map(die=>die.number)
    return valueCheck[0]
  }

  function holdDice(id) {
    if(diceValueCheck()){
        setDice(prevDice => {
                return prevDice.map((die) => {
                    return die.id === id ? {...die, hold: !die.hold} : die
                })
            })
          }
          asd(id)
  }
  function asd(id) {
    if(diceValueCheck()){
        setDice(prevDice => {
                return prevDice.map((die) => {
                    return die.id === id ? {...die, a:{...die.a, ab:!die.ab}} : die


                })
            })
          }
  }


  function throwAll() {
    const min = Math.ceil(1);
    const max = Math.floor(6);
      if(throwAmount > 0){
        setDice(prevDice => {
                return prevDice.map((die) => {
                     return !die.hold ? {...die, number: Math.floor(Math.random() * (max - min + 1) + min)} : die
                })
            })
        setThrowAmount(prevThrow => prevThrow -1)
      }else {
        alert("You don't have more attempts")
      }
  }


  function scoreboardHover(event) {
    if(hover === false){
      setHover(!hover)
    }

    const {id} = event.target
    const count = countDiceValue()

    if (id === "1" && !score1.ones.clicked){
      count[1] ? setHoverScore(prevScore => ({...prevScore, ones: count[1]*1})) : setHoverScore(prevScore => ({...prevScore, ones: 0}))
    }else if (id === "2" && !score1.twos.clicked) {
      count[2] ? setHoverScore(prevScore => ({...prevScore, twos: count[2]*2})) : setHoverScore(prevScore => ({...prevScore, twos: 0}))
    }else if (id === "3" && !score1.threes.clicked) {
      count[3] ? setHoverScore(prevScore => ({...prevScore, threes: count[3]*3})) : setHoverScore(prevScore => ({...prevScore, threes: 0}))
    }else if (id === "4" && !score1.fours.clicked) {
      count[4] ? setHoverScore(prevScore => ({...prevScore, fours: count[4]*4})) : setHoverScore(prevScore => ({...prevScore, fours: 0}))
    }else if (id === "5" && !score1.fives.clicked) {
      count[5] ? setHoverScore(prevScore => ({...prevScore, fives: count[5]*5})) : setHoverScore(prevScore => ({...prevScore, fives: 0}))
    }else if (id === "6" && !score1.six.clicked) {
      count[6] ? setHoverScore(prevScore => ({...prevScore, six: count[6]*6})) : setHoverScore(prevScore => ({...prevScore, six: 0}))
    }else if (id==="9" && !score1.pair.clicked) {
      let pair_value = 0
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value===2 || value===3 ||value===4 || value===5){
          pair_value = key
          setHoverScore(prevScore => ({...prevScore, pair: pair_value*2 }))
        }
      })
      //const die_pair_value=countPair()

    }
    else if (id==="10" && !score1.two_pair.clicked) {
      let two_pair_value1 = 0
      let two_pair_value2 = 0
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value===2 || value ===3){
          if(!two_pair_value1){
            two_pair_value1=key
          }else if (!two_pair_value2) {
            two_pair_value2=key

          }
          //setHoverScore(prevScore => ({...prevScore, two_pair: two_pair*2 }))
        }
      })
    if(two_pair_value1 && two_pair_value2){
      let two_pair_value = two_pair_value1*2+two_pair_value2*2
      setHoverScore(prevScore => ({...prevScore, two_pair:  two_pair_value}))

    }else {
      setHoverScore(prevScore => ({...prevScore, two_pair:  0}))
    }
    }
    else if (id==="11" && !score1.three_of_a_kind.clicked) {
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value===3 || value ===4 || value === 5){
          let newHoverValue = key*3
          setHoverScore(prevScore => ({...prevScore, three_of_a_kind: newHoverValue }))
        }
      })
    }
    else if (id==="12" && !score1.four_of_a_kind.clicked) {
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value ===4 || value === 5){
          setHoverScore(prevScore => ({...prevScore, four_of_a_kind: key*4 }))
        }
      })
    }
    else if (id === "13" && !score1.small_straight.clicked) {
        if (count[1] && count[2] && count[3] && count[4] && count[5]) {
          setHoverScore(prevScore => ({...prevScore, small_straight:15}))
      } else { setHoverScore(prevScore => ({...prevScore,small_straight:0}))}
    }else if (id === "14" && !score1.straight.clicked) {
       if (count[2] && count[3] && count[4] && count[5] && count[6] ) {
          setHoverScore(prevScore => ({...prevScore,straight:20}))
      }else { setHoverScore(prevScore => ({...prevScore,straight:0}))}
   }
   else if (id==="15" && !score1.full_house.clicked) {
     let pair =0
     let three_kind = 0
     Object.keys(count).forEach(key => {
       let value = count[key]

       //the largest die pair value will be returned the last one to be returned from the itteration
         if(value===2){
           pair=key
         }else if (value===3) {
           three_kind=key
         }
         if(pair && three_kind){
           setHoverScore(prevScore => ({...prevScore, full_house:  (pair*2+three_kind*3)}))

         }else {
           setHoverScore(prevScore => ({...prevScore, full_house:  0}))
         }
     })
   }
   else if (id === '16' && !score1.chance.clicked) {
     let chanceSum = 0
     Object.keys(count).forEach(key => {
       let value = count[key]
       chanceSum = chanceSum + (key*value)
     })
     setHoverScore(prevScore => ({...prevScore, chance: chanceSum}))
   }
   else if (id==='17') {
     Object.keys(count).forEach(key => {
       let value = count[key]
         if(value===5){
           setHoverScore(prevScore => ({...prevScore,yatzy:50}))
         } else {
           setHoverScore(prevScore => ({...prevScore, yatzy: 0}))
         }
   })
 }
}





function scoreboardHoverLeave(event) {
     //event.stopPropagation()
     event.preventDefault()
     if (hover === true){
         setHover(!hover)
     }

     const {id} = event.target
     //const count = countDiceValue()
     if (id === "1"){
      setHoverScore(prevValue => ({...prevValue, ones:score1.ones.value}))
     }else if (id === "2") {
       setHoverScore(prevValue => ({...prevValue, twos:score1.twos.value}))
     }else if (id === "3") {
       setHoverScore(prevValue => ({...prevValue, threes:score1.threes.value}))
     }else if (id === "4") {
       setHoverScore(prevValue => ({...prevValue, fours:score1.fours.value}))
     }else if (id === "5") {
       setHoverScore(prevValue => ({...prevValue, fives:score1.fives.value}))
     }else if (id === "6") {
       setHoverScore(prevValue => ({...prevValue, six:score1.six.value}))
     }else if (id === "9") {
       setHoverScore(prevValue => ({...prevValue, pair:score1.pair.value}))
     }
     else if (id === "10") {
       setHoverScore(prevValue => ({...prevValue, two_pair:score1.two_pair.value}))
     }else if (id === "11") {
       setHoverScore(prevValue => ({...prevValue, three_of_a_kind:score1.three_of_a_kind.value}))
     } else if (id==="12") {
       setHoverScore(prevValue => ({...prevValue, four_of_a_kind:score1.four_of_a_kind.value}))
     }else if (id==="13") {
       setHoverScore(prevValue => ({...prevValue, small_straight:score1.small_straight.value}))
     }else if (id==="14") {
       setHoverScore(prevValue => ({...prevValue, straight:score1.straight.value}))
     } else if (id==="15") {
       setHoverScore(prevValue => ({...prevValue, full_house:score1.full_house.value}))
     }else if (id==="16") {
       setHoverScore(prevValue => ({...prevValue, chance:score1.chance.value}))
     }else if (id==="17") {
       setHoverScore(prevValue => ({...prevValue, yatzy:score1.yatzy.value}))
     }
   }
//score1.ones.value + score1.twos.value + score1.threes.value + score1.fours.value + score1.fives.value + score1.six.value
    function saveScore(event) {
    if(diceValueCheck()) {
      let count = countDiceValue()
      const {id} = event.target

      if (id === "1" && !score1.ones.clicked){
        if(!count[1]){
          //setScore(prevScore => ({...prevScore, ones:0}))

          setScore1(prevScore1 => ({...prevScore1,ones:{...prevScore1.ones, value:0, clicked:true}}))

        } else{
       //setScore(prevScore => ({...prevScore,ones:count[1]*1}))
       setScore1(prevScore1 => ({...prevScore1,ones:{...prevScore1.ones, value:count[1]*1, clicked:true}}))

     }
   }else if (id === "2" && !score1.twos.clicked) {
        if(!count[2]){
          //setScore(prevScore => ({...prevScore, twos:0}))
          setScore1(prevScore1 => ({...prevScore1,twos:{...prevScore1.twos, value:0, clicked:true}}))
        } else{
        //setScore(prevScore => ({...prevScore,twos:count[2]*2}))
        setScore1(prevScore1 => ({...prevScore1,twos:{...prevScore1.twos, value:count[2]*2, clicked:true}}))
      }
    }else if (id === "3" && !score1.threes.clicked) {
        if(!count[3]){
          //setScore(prevScore => ({...prevScore, threes:0}))
          setScore1(prevScore1 => ({...prevScore1,threes:{...prevScore1.threes, value:0, clicked:true}}))
        } else{
        //setScore(prevScore => ({...prevScore,threes:count[3]*3}))
        setScore1(prevScore1 => ({...prevScore1,threes:{...prevScore1.threes, value:count[3]*3, clicked:true}}))
      }
    }else if (id === "4" && !score1.fours.clicked) {
        if(!count[4]){
          //setScore(prevScore => ({...prevScore, fours:0}))
          setScore1(prevScore1 => ({...prevScore1,fours:{...prevScore1.fours, value:0, clicked:true}}))
        } else{
        //setScore(prevScore => ({...prevScore,fours:count[4]*4}))
        setScore1(prevScore1 => ({...prevScore1,fours:{...prevScore1.fours, value:count[4]*4, clicked:true}}))

      }
    }else if (id === "5" && !score1.fives.clicked) {
        if(!count[5]){
          //setScore(prevScore => ({...prevScore, fives:0}))
          setScore1(prevScore1 => ({...prevScore1,fives:{...prevScore1.fives, value:0, clicked:true}}))
        } else{
        //setScore(prevScore => ({...prevScore,fives:count[5]*5}))
        setScore1(prevScore1 => ({...prevScore1,fives:{...prevScore1.fives, value:count[5]*5, clicked:true}}))
      }
    }else if (id === "6" && !score1.six.clicked) {
        if(!count[6]){
          //setScore(prevScore => ({...prevScore, six:0}))
          setScore1(prevScore1 => ({...prevScore1,six:{...prevScore1.six, value:0, clicked:true}}))
        } else{
        //setScore(prevScore => ({...prevScore,six:count[6]*6}))
        setScore1(prevScore1 => ({...prevScore1,six:{...prevScore1.six, value:count[6]*6, clicked:true}}))
      }
    }
    else if (id==="9" && !score1.pair.clicked) {
      let pair_value = 0
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value===2 || value===3 ||value===4 || value===5){
          pair_value = key
          //setScore(prevScore => ({...prevScore, pair: pair_value*2 }))

          setScore1(prevScore1 => ({...prevScore1,pair:{...prevScore1.pair, value:pair_value*2, clicked:true}}))

        }else {
          setScore1(prevScore1 => ({...prevScore1,pair:{...prevScore1.pair, value:0, clicked:true}}))
        }
      })

    }
    else if (id==="10" && !score1.two_pair.clicked) {
      let two_pair_value1 = 0
      let two_pair_value2 = 0
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value===2 || value ===3){
          if(!two_pair_value1){
            two_pair_value1=key
          }else if (!two_pair_value2) {
            two_pair_value2=key

          }
        }
      })
    if(!two_pair_value1 || !two_pair_value2){
      //setScore(prevScore => ({...prevScore, two_pair:  0}))
      setScore1(prevScore1 => ({...prevScore1,two_pair:{...prevScore1.two_pair, value:0, clicked:true}}))
    }else {
      let two_pair_value = two_pair_value1*2+two_pair_value2*2
      //setScore(prevScore => ({...prevScore, two_pair:  two_pair_value}))
      setScore1(prevScore1 => ({...prevScore1,two_pair:{...prevScore1.two_pair, value:two_pair_value, clicked:true}}))
    }
    }
    else if (id==="11" && !score1.three_of_a_kind.clicked) {
      Object.keys(count).forEach(key => {
        let value = count[key]
        if (value===3 || value ===4 || value === 5){
          //setScore(prevScore => ({...prevScore, four_of_a_kind: key*4 }))
          let newScore=key*3
          setScore1(prevScore1 => ({...prevScore1,three_of_a_kind:{...prevScore1.three_of_a_kind, value:newScore, clicked:true}}))
        }else {
          setScore1(prevScore1 => ({...prevScore1,three_of_a_kind:{...prevScore1.three_of_a_kind, clicked:true}}))
        }
      })
    }
    else if (id==="12" && !score1.four_of_a_kind.clicked) {
      Object.keys(count).forEach(key => {
        let value = count[key]
        //the largest die pair value will be returned the last one to be returned from the itteration
        if (value ===4 || value ===5){
          //setScore(prevScore => ({...prevScore, four_of_a_kind: key*4 }))
          let newScore=key*4

          setScore1(prevScore1 => ({...prevScore1,four_of_a_kind:{...prevScore1.four_of_a_kind, value:newScore, clicked:true}}))
        }else{

          setScore1(prevScore1 => ({...prevScore1,four_of_a_kind:{...prevScore1.four_of_a_kind,clicked:true}}))
        }
      })
    }else if (id === "13" && !score1.small_straight.clicked) {
        if (count[1] && count[2] && count[3] && count[4] && count[5]) {
          //setScore(prevScore => ({...prevScore, small_straight:15}))
          setScore1(prevScore1 => ({...prevScore1,small_straight:{...prevScore1.small_straight, value:15, clicked:true}}))
      } else { //setScore(prevScore => ({...prevScore,small_straight:0}))
      setScore1(prevScore1 => ({...prevScore1,small_straight:{...prevScore1.small_straight, value:0, clicked:true}}))
    }
  }else if (id === "14" && !score1.straight.clicked) {
        if (count[2] && count[3] && count[4] && count[5] && count[6] ) {
          //setScore(prevScore => ({...prevScore,straight:20}))
          setScore1(prevScore1 => ({...prevScore1,straight:{...prevScore1.straight, value:20, clicked:true}}))
      }else { //setScore(prevScore => ({...prevScore,straight:0}))}
      setScore1(prevScore1 => ({...prevScore1,straight:{...prevScore1.straight, value:0, clicked:true}}))
    }
  }
    else if (id==="15" && !score1.full_house.clicked ) {
      let pair =0
      let three_kind = 0
      Object.keys(count).forEach(key => {
        let value = count[key]

        //the largest die pair value will be returned the last one to be returned from the itteration
          if(value===2){
            pair=key
          }else if (value===3) {
            three_kind=key
          }
          if(pair && three_kind){
            //setScore(prevScore => ({...prevScore, full_house:  (pair*2+three_kind*3)}))
            setScore1(prevScore1 => ({...prevScore1,full_house:{...prevScore1.full_house, value:(pair*2+three_kind*3), clicked:true}}))
          }else {
            //setScore(prevScore => ({...prevScore, full_house:  0}))
            setScore1(prevScore1 => ({...prevScore1,full_house:{...prevScore1.full_house, value:0, clicked:true}}))
          }
      })

    }else if (id === '16' && !score1.chance.clicked) {
      let chanceSum = 0
      Object.keys(count).forEach(key => {
        let value = count[key]
        chanceSum = chanceSum + (key*value)
      })
      setScore1(prevScore1 => ({...prevScore1,chance:{...prevScore1.chance, value: chanceSum, clicked:true}}))

    }
    else if (id === '17' && !score1.yatzy.clicked) {
      Object.keys(count).forEach(key => {
        let value = count[key]
          if(value===5){
            setScore1(prevScore1 => ({...prevScore1,yatzy:{...prevScore1.yatzy, value:50, clicked:true}}))

          } else {
            setScore1(prevScore1 => ({...prevScore1,yatzy:{...prevScore1.yatzy, value: 0, clicked:true}}))
          }
    })
  }

  setThrowAmount(3)
  setDice(prevDice => {
          return prevDice.map((die) => {
               return {...die, number:0, hold:false}
          })
      })

}
}

  //  {playerAmount >=  1 ?
  return (
    <div className="App">
      <Header />
        <main>
          <div className="dice">
            {dice.map(this_die =>
              <Dice
              key={this_die.id}
              number={this_die.number}
              hold={this_die.hold}
              throwDice={() => holdDice(this_die.id)} /> )}
          </div>
          <div className="button--div">
            <button onClick={throwAll} className="button--throwall"> THROW </button>
            <p className="button--text"> Throws left: {throwAmount} </p>
          </div>
          <hr>
          </hr>
      </main>
      <Scoreboard
        scoreboardHoverLeave={scoreboardHoverLeave}
        scoreboardHover={scoreboardHover}
        hoverScore={hoverScore}
        dice={dice}
        hover={hover}
        saveScore={saveScore}
        score1={score1}
      />
    </div>
  );
} export default App;
