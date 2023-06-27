import { useState } from "react";
import Box from "./Box";


export default function Board({arr, mainOnChange}){
    return(
        <div className="board">
            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {0}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {1}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {2}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {3}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {4}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {5}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {6}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {7}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {8}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {9}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {10}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {11}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {12}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {13}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {14}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {15}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {16}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {17}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {18}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {19}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {20}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {21}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {22}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {23}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {24}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {25}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {26}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {27}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {28}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {29}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {30}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {31}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {32}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {33}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {34}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {35}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {36}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {37}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {38}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {39}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {40}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {41}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {42}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {43}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {44}/>
            </div>
            
            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {45}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {46}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {47}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {48}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {49}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {50}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {51}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {52}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {53}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {54}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {55}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {56}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {57}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {58}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {59}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {60}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {61}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {62}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {63}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {64}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {65}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {66}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {67}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {68}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {69}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {70}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {71}/>
            </div>

            <div className="board-row">
                <Box arr={arr} mainOnChange={mainOnChange} index = {72}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {73}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {74}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {75}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {76}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {77}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {78}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {79}/>
                <Box arr={arr} mainOnChange={mainOnChange} index = {80}/>
            </div>

        </div>
    );
}