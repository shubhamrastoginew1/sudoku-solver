import Board from "./Board";
import {useState } from "react";
import Left from "./Left";
import Confetti from 'react-confetti';

export default function Home() {
    
    const [difficulty,  setDifficulty] = useState(1);
    const [confettiState, setConfetti] = useState(false);

  let easy1D = Array(81).fill("");
  const easy2D = [[4, ".", ".", ".", ".", 6, 2, ".", "."],
                  [3, 8, ".", ".", 5, ".", ".", ".", "."],
                  [".", 1, ".", 2, ".", ".", 7, 5, 3],
                  [6, 5, 1, 9, ".", ".", ".", 7, 4],
                  [".", ".", ".", 7, ".", 3, 1, ".", "."],
                  [7, ".", ".", ".", 1, 5, 9, 6, 2],
                  [".", 9, 4, 6, 7, ".", ".", 3, "."],
                  [1, ".", ".", ".", ".", 9, 8, ".", "."],
                  [5, ".", ".", ".", ".", 1, 6, ".", 9]];

  for(let i=0;i<81;i++){
    if(easy2D[Math.floor(i / 9)][i % 9]==="."){
      easy1D[i] = "";
    }
    else
      easy1D[i] = easy2D[Math.floor(i / 9)][i % 9];
  }
  let [arr, setArr] = useState(easy1D);
  let [arr2, setArr2] = useState(easy2D);

  let med1D = Array(81).fill("");
  const med2D = [["9", "6", ".", "4", ".", "1", "3", ".", "."],
                  [".", "7", ".", "9", ".", ".", "5", "6", "."],
                  [".", ".", ".", "7", ".", ".", ".", "2", "."],
                  ["4", ".", "6", "1", ".", ".", ".", ".", "."],
                  [".", ".", "8", ".", "6", ".", ".", ".", "."],
                  [".", ".", ".", ".", "4", "8", "1", ".", "6"],
                  ["5", ".", ".", "6", ".", "7", "9", ".", "."],
                  [".", ".", ".", ".", ".", ".", "2", ".", "7"],
                  ["8", "2", ".", ".", ".", ".", "6", ".", "3"]];
                  
  for(let i=0;i<81;i++){
    if(med2D[Math.floor(i / 9)][i % 9]==="."){
      med1D[i] = "";
    }
    else
      med1D[i] = med2D[Math.floor(i / 9)][i % 9];
  }

  let hard1D = Array(81).fill("");
  const hard2D = [[".", ".", ".", "5", ".", ".", "4", "2", "."],
                  ["6", ".", ".", ".", "4", ".", ".", ".", "."],
                  [".", "5", ".", ".", ".", ".", ".", ".", "3"],
                  [".", ".", ".", "6", "8", ".", "1", ".", "."],
                  [".", ".", "2", ".", ".", ".", ".", ".", "."],
                  ["5", "3", ".", ".", "1", ".", "7", "6", "."],
                  [".", ".", ".", ".", ".", ".", "8", "7", "."],
                  ["7", "2", ".", ".", ".", "1", ".", ".", "9"],
                  [".", "9", ".", ".", ".", "3", ".", "5", "."]];
                  
  for(let i=0;i<81;i++){
    if(hard2D[Math.floor(i / 9)][i % 9]==="."){
      hard1D[i] = "";
    }
    else
      hard1D[i] = hard2D[Math.floor(i / 9)][i % 9];
  }

  let exp1D = Array(81).fill("");
  const exp2D = [[".", ".", "5", "6", ".", "2", ".", ".", "."],
                  ["7", ".", ".", "8", "1", ".", "4", ".", "."],
                  [".", ".", ".", ".", ".", ".", "5", "6", "."],
                  [".", "4", "9", ".", ".", ".", ".", ".", "."],
                  ["8", ".", ".", ".", ".", ".", ".", ".", "7"],
                  [".", ".", ".", ".", "5", "1", ".", ".", "."],
                  [".", ".", ".", "9", "4", ".", "8", ".", "2"],
                  ["3", ".", "6", "1", ".", ".", ".", ".", "."],
                  [".", ".", ".", ".", ".", ".", ".", ".", "."]];
                  
  for(let i=0;i<81;i++){
    if(exp2D[Math.floor(i / 9)][i % 9]==="."){
      exp1D[i] = "";
    }
    else
      exp1D[i] = exp2D[Math.floor(i / 9)][i % 9];
  }


  const easy = ()=>{
    setArr(easy1D);
    setArr2(easy2D);
    setDifficulty(1);
  }
  const medium = ()=>{
    setArr(med1D);
    setArr2(med2D);
    setDifficulty(2);
  }
  const hard = ()=>{
    setArr(hard1D);
    setArr2(hard2D);
    setDifficulty(3);
  }
  const exp = ()=>{
    setArr(exp1D);
    setArr2(exp2D);
    setDifficulty(4);
  }








  console.log("rer");
  const x = new Array(9);
  for (let i = 0; i < 9; i++) {
    x[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
      x[i][j] = ".";
    }
  }





  const mainOnChange = (val, ind) => {
    setConfetti(false);
    let deep = [...arr];
    deep[ind] = val;
    setArr(deep);
    let deep2 = [...arr2];
    if(val==="")
        deep2[Math.floor(ind / 9)][ind % 9] = ".";
    else
        deep2[Math.floor(ind / 9)][ind % 9] = val;
    setArr2(deep2);
  }


let SolutionSubmitHandler = () => {
    if(window.confirm("Do you really want to see the solution?")===false){
        return;
    }

    if(difficulty===1){
        solveSudoku(easy2D);
    }
    if(difficulty===2){
        solveSudoku(med2D);
    }
    if(difficulty===3){
        solveSudoku(hard2D);
    }
    if(difficulty===4){
        solveSudoku(exp2D);
    }
  }
  let CheckSubmitHandler = ()=>{
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(arr2[i][j]==="."){
                window.alert("Please fill all the cells");
                return;
            }
            if(isValid(i, j, arr2[i][j], arr2)===0){
                window.alert("Wrong Solution.. Try Again");
                return;
            }
        }
    }
    window.alert("Correct...");
    setConfetti(true);
    setTimeout(() => {
        setConfetti(false);
    }, 3000);
  }
  


  function solveSudoku(arr2) {
    let ans = fill(arr2);
    if (ans === 1) {
      setArr2(arr2);
      let d = [...arr];
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          d[9 * i + j] = arr2[i][j];
        }
      }
      setArr(d);
    }
    else {
        alert("wrong");
    }
    return;
  }
  function fill(arr2) {
    let allFilled = 1;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr2[i][j] === ".") {
            allFilled = 0;
          for (let k = 1; k <= 9; k++) {
            if (isValid(i, j, k, arr2) === 1) {

            arr2[i][j] = k;

              if (fill(arr2) === 1) {
                return 1;
              } else {
                arr2[i][j] = ".";
              }
            }
          }
          return 0;
        }
      }
    }
    return 1;
  }

  function isValid(i, j, num, arr2) { 
    let a = 1;
    if(!(Number(num)>0 || Number(num)<9)){
        a = 0;
    }

    for (let k = 0; k < 9; k++) {
      if (k !== j && (Number(arr2[i][k]) === Number(num))) { // row check...
        a = 0;

        break;
      }
      if (k !== i && (Number(arr2[k][j]) === Number(num))) { //col check...
        a = 0;
        break;
      }
    }
    let cellRow = Math.floor(i / 3) * 3;
    let cellCol = Math.floor(j / 3) * 3;
    for (let m = cellRow; m < cellRow + 3; m++) { // box check...
      for (let n = cellCol; n < cellCol + 3; n++) {
        if (m === i && n === j) continue;
        if ((Number(arr2[m][n]) === Number(num))) {
          a = 0;
          break;
        }
      }
    }

    return a;
  }



  const resetHandler = () => {
    if(window.confirm("Do you really want to reset?")===false){
        return;
    }
    let d = [...arr];
    let d2 = [...arr2];
    if(difficulty===1){
        d = easy1D;
        d2 = easy2D;
        setArr(d);
        setArr2(d2);
    }
    if(difficulty===2){
        d = med1D;
        d2 = med2D;
        setArr(d);
        setArr2(d2);
    }
    if(difficulty===3){
        d = hard1D;
        d2 = hard2D;
        setArr(d);
        setArr2(d2);
    }
    if(difficulty===4){
        d = exp1D;
        d2 = exp2D;
        setArr(d);
        setArr2(d2);
    }
  }


  return (
    <div className="main-container">

      <header>
        <div className="header">
          Sudoku Solver
        </div>
      </header>

      <div className="main">
        <Left easy = {easy} medium = {medium} hard = {hard} exp = {exp}/>

        <div className="center">
          <Board arr={arr} mainOnChange={mainOnChange} easy1D={easy1D} med1D={med1D} hard1D={hard1D} exp1D={exp1D} difficulty={difficulty} arr2={arr2} isValid={isValid}/>
          <div className="buttons">
            <button type="submit" className="submit btn" onClick={SolutionSubmitHandler} >Solution </button>
            <button type="submit" className="checkNow btn" onClick={CheckSubmitHandler} >Check Now</button>
            <button type="reset" className="reset btn" onClick={resetHandler} >Reset</button>
          </div>
        </div>
        {
            confettiState?(
                <Confetti  className="confetti"/>

            ) : (
                <></>
            )
        }

        <div className="right">
          {/* Timer */}
        </div>

      </div>


    </div>
  );
}
