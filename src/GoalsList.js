import React from "react";
import { useState,useEffect } from "react";
import {v4 as uuidv4} from "uuid"



const GoalsList=()=>{
    const [goal,setGoal] = useState('');
    let list = JSON.parse(localStorage.getItem("goals")) || [];
    const divShow = document.getElementsByClassName("list");
    const AddAndShow=(e)=>{
        e.preventDefault();
        const newGoal = {goals:goal ,id:uuidv4()};
        list.push(newGoal)
        localStorage.setItem("goals", JSON.stringify(list));
    }
    
    
    return(
        <div className="goals">
            <input placeholder="goal" type="text" required value={goal} onChange = {(e) => setGoal(e.target.value)}></input>
            <h2>{goal}</h2>
            <button onClick={(e) => AddAndShow(e)}>Add</button>
           
        </div>
    );
};

export default GoalsList