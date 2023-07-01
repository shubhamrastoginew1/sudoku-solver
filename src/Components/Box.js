import { useState } from "react";

export default function Box({arr, index, mainOnChange, status, arr2, isValid}){


    const changeHandler = (e)=>{
        if(noChange===1){
            return;
        }
        else if(e.target.value ===" " || Number(e.target.value)<0 || Number(e.target.value)>9){
            return;
        }
        else{
            mainOnChange(e.target.value, index);
            if( status[index]=== "" &&  e.target.value!== ""){
                let a = isValid(Math.floor(index/9), index%9, e.target.value);
                if(a===0){
                    setV(" invalid");
                }
                else{
                    setV(" valid");
                }
            }
            else if(status[index]==="" &&  e.target.value===""){
                setV(" ");
            }
        }
    }
    let c1 = " 1";
    let c2 = " 2";
    let c3 = " 3";
    let c4 = " 4";
    let color = " ";
    const [validity, setV] = useState(" ");

    if(arr[index]==="" && validity!=" ")
        setV(" ");



    let noChange = 0;
    if(status[index]!==""){
        noChange = 1;
        color = " fixed";
    }

    if(index%9===2 || index%9===5){
        c1 = " borderRight";
    }
    if(18<=index && index<=26){
        c2 = " borderBottom";
    }
    if(45<=index && index<=53){
        c2 = " borderBottom";
    }
    if(0<=index && index<=8){
        c3 = " borderTop";
    }
    if(72<=index && index<=80){
        c3 = " borderBottom";
    }
    if(index%9===0){
        c4 = " borderLeft";
    }
    if(index%9===8){
        c4 = " borderRight";
    }


    return(
        <div className="box-container">
            <input  type="text" value={arr[index]} onChange={changeHandler} className= {"box-input" + c1 + c2 + c3 + c4 + color + validity} ></input>
        </div>
    );
}