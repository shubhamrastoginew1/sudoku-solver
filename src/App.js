import Board from "./Components/Board";
import './App.css';
import { useContext, useEffect, useState } from "react";

function App() {
  const [arr, setArr] = useState(Array(81).fill(""));
  console.log("rer");
  const x = new Array(9);
  for (let i = 0; i < 9; i++){
    x[i] = new Array(9);
    for(let j=0;j<9;j++){
      x[i][j] = ".";
    }
  }

  
  const [arr2, setArr2] = useState(x);

  const mainOnChange = (val, ind)=>{
    let deep = [...arr];
    deep[ind] =  val;
    setArr(deep);
    let deep2 = [...arr2];
    deep2[Math.floor(ind/9)][ind%9] =  val;
    setArr2(deep2);
  }

  var flag = -1;
  let submitHandler = ()=>{
    for(var i=0;i<81;i++){
      if(arr[i]==="")
        continue;
      else if(1<=Number(arr[i]) && Number(arr[i])<=9){
        continue;
      }
      else{
        flag = i;
        break;
      }
    }
    if(flag!==-1){
      let d = [...arr];
      d = Array(81).fill("");
      setArr(d);
      let d2 = [...arr2];
      d2 = x;
      setArr2(d2);
    }
    else{ 
      let flag=true; //to check if the existing one is valid or not...

      for (let i = 0; i < 9; i++) {
        for(let j=0;j<9;j++){
          if(arr2[i][j]=== "."){
            continue;
          }
          else{
            if(isValid(i, j, arr2[i][j])!==true){
              console.log("amin");
              flag = false;
              break;
            }
          }
        }
        if(flag===false)
          break;
      }
      if(flag===false){
        let deep = [...arr];
        for(let i=0;i<81;i++){
          deep[i] = "";
        }
        setArr(deep);
        let deep2 = [...arr2];
        deep2 = x;
        setArr2(deep2);
      }
      else{
        solveSudoku();
      }
    }
  }


  function solveSudoku() {
    let ans = fill();
    if(ans===true){
      let d = [...arr];
      for (let i = 0; i < 9; i++) {
        for(let j=0;j<9;j++){
          d[9*i+j] = arr2[i][j];
        }
      }
      setArr(d);
    }
    else{
      let d = [...arr];
      d = Array(81).fill("");
      setArr(d);
      let d2 = [...arr2];
      d2 = x;
      setArr2(d2);
    }
  }
  function fill() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (arr2[i][j] === ".") {
          for (let k = 1; k <= 9; k++) {
            if (isValid(i, j, k)===true) {

              let deep = [...arr2];  
              deep[i][j] = k;
              setArr2(deep);

              if (fill()===true) {
                return true;
              } else {
                let deep2 = [...arr2];
                deep2[i][j] = ".";
                setArr2(deep2);
              }
            }
          }
          return false;
        }
      }
    }

    let d = [...arr2];
    d = x;
    setArr2(d);
    return true;
  }

  function isValid(i, j, num) {
    for (let k = 0; k < 9; k++) {
      if (k !== j && Number(arr2[i][k]) === num) {
        console.log(false);
        return false;
      }
      if (k !== i && Number(arr2[k][j]) === num) {
        console.log(false);
        return false;
      }
    }
    let cellRow = Math.floor(i / 3) * 3;
    let cellCol = Math.floor(j / 3) * 3;
    for (let m = cellRow; m < cellRow + 3; m++) {
      for (let n = cellCol; n < cellCol + 3; n++) {
        if(m===i && n===j) continue;
        if (Number(arr2[m][n]) === num) {
          console.log(false);
          return false;
        }
      }
    }

    return true;
  }



  const resetHandler = ()=>{
    let d = [...arr];
    d = Array(81).fill("");
    setArr(d);
    d = [...arr2];
    d = x;
    setArr2(d);
  }


  return (
    <div className="main-container">
      <Board arr={arr}  mainOnChange={mainOnChange}/>
      <div className="buttons">
          <button type="submit" className="submit btn" onClick={submitHandler} >Solve Now</button>
          <button type="reset" className="reset btn" onClick={resetHandler} >Reset</button>
      </div>
    </div>
  );
}

export default App;











