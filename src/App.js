import React, { useState } from "react";
import Button from "./components/Button"
import Item from "./components/Item"
const App = () => {
  let valeur 
  const handleChange =(event)=>{
    valeur=event.target.value ;
    console.log(valeur);
   
  }
  const remove =(event)=>{
   return (
  <input onChange=""/>

   )
   

  }
  return (
    <div><h1>To-Do App!</h1>
    <p>Add New To-Do</p>
    <input onChange={handleChange}  />
     <input {onClick(remove)} />
    <Button title="Add" />
    <h2>Let's get some work done!</h2>
    <Item text= {valeur}  />
    
    </div>
  );
};


export default App;
