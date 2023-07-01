import { useState } from "react";


export default function Left({easy, medium, hard, exp}){
    const [c1, setC1] = useState("levels active");
    const [c2, setC2] = useState("levels notActive");
    const [c3, setC3] = useState("levels notActive");
    const [c4, setC4] = useState("levels notActive");
    

    const clickHandler1 = ()=>{
        setC1("levels active");
        setC2("levels notActive");
        setC3("levels notActive");
        setC4("levels notActive");
        easy();
    }
    const clickHandler2 = ()=>{
        setC2("levels active");
        setC1("levels notActive");
        setC3("levels notActive");
        setC4("levels notActive");
        medium();
    }
    const clickHandler3 = ()=>{
        setC3("levels active");
        setC2("levels notActive");
        setC1("levels notActive");
        setC4("levels notActive");
        hard();
    }
    const clickHandler4 = ()=>{
        setC4("levels active");
        setC2("levels notActive");
        setC1("levels notActive");
        setC3("levels notActive");
        exp();
    }

    return(
        <div className="left">
            <div className={c1} onClick={clickHandler1}>
                Easy
            </div>
            <div className={c2} onClick={clickHandler2}>
                Medium
            </div>
            <div className={c3} onClick={clickHandler3}>
                Hard
            </div>
            <div className={c4} onClick={clickHandler4}>
                Expert
            </div>
        </div>
    );
}