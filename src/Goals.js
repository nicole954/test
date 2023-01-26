import React from "react";
import { useState,useEffect } from "react";

const getLocalItems = () =>{
    let goals = localStorage.getItem("goals");
    console.log(goals);
    if(goals){
        return JSON.parse(localStorage.getItem("goals"));

    }else{
        return [];
    }
}

const Goals = () => {

    const [inputGoal, setInputGoal] = useState("");
    const [items, setItems] = useState(getLocalItems());

    const addItem = () => {
        if (!inputGoal) {
            alert('plzz fill data');
        } else if(inputGoal ) {
            setItems(
                items.map((elem) => {     
                    return elem;
                })
            )
        
         setInputGoal('');

        } else {
            const allInputData = { id: new Date().getTime().toString(), name:inputGoal }
            setItems([...items, allInputData]);
            setInputGoal('')
        }
    }
    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);



        setInputGoal(newEditItem.name);


    }
    

    // remove all 
    const removeAll = () => {
         setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("goals", JSON.stringify(items))
     }, [items]);


     return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                           value={inputGoal} 
                           onChange={(e) => setInputGoal(e.target.value) }
                        />
                       
                       
                    </div>

                    <div className="showItems">
                        
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    )


}
export default Goals
 

