import { useEffect } from "react";
import { useState } from "react";

export default function Box({arr, index, mainOnChange}){
    // useEffect(() => {
    //     console.log("rererre");
    //   }, arr);

    const changeHandler = (e)=>{
        mainOnChange(e.target.value, index);
    }
    let c1 = " 1";
    let c2 = " 2";
    if(index%9===2 || index%9===5){
        c1 = " borderRight";
    }
    if(18<=index && index<=26){
        c2 = " borderBotttom";
    }
    if(45<=index && index<=53){
        c2 = " borderBotttom";
    }

    return(
        <div className="box-container">
            <input type="text" value={arr[index]} onChange={changeHandler} className= {"box-input" + c1 + c2} ></input>
        </div>
    );
}