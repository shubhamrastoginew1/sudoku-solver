import { useState } from "react";
import Box from "./Box";


export default function Board({arr, mainOnChange, easy1D, med1D, hard1D, exp1D, difficulty, arr2, isValid}){
    let status = [];
    if(difficulty===1){
        status = easy1D;
    }
    if(difficulty===2){
        status = med1D;
    }
    if(difficulty===3){
        status = hard1D;
    }
    if(difficulty===4){
        status = exp1D;
    }
    

    return(
        <div className="board">
            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {0} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {1} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {2} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {3} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {4} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {5} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {6} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {7} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {8} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {9} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {10} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {11} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {12} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {13} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {14} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {15} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {16} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {17} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {18} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {19} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {20} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {21} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {22} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {23} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {24} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {25} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {26} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {27} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {28} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {29} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {30} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {31} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {32} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {33} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {34} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {35} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {36} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {37} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {38} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {39} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {40} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {41} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {42} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {43} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {44} status={status} arr2={arr2} isValid={isValid} />
            </div>
            
            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {45} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {46} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {47} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {48} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {49} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {50} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {51} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {52} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {53} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {54} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {55} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {56} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {57} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {58} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {59} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {60} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {61} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {62} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {63} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {64} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {65} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {66} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {67} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {68} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {69} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {70} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {71} status={status} arr2={arr2} isValid={isValid} />
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {72} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {73} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {74} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {75} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {76} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {77} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {78} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {79} status={status} arr2={arr2} isValid={isValid} />
                <Box arr={arr} mainOnChange={mainOnChange} index = {80} status={status} arr2={arr2} isValid={isValid} />
            </div>

        </div>
    );
}