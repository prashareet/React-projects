import { useState } from 'react'

import './App.css'
import  './script'

function App() {
  
  let [count, setCounter] = useState(0);
  const addValue  = ()=>{
    if(count<20){
      count++;
    }
    
    setCounter(count);
  }
  const decValue =()=>{
    if(count>0){
      count--;
    }
    
    setCounter(count);
  }


  return (
    <>
    <h1>Counter project</h1>
    <h2>Counter value : {count} </h2>
    <button onClick={addValue
      
    } >Increase counter</button>
    <button onClick={decValue
    }> Decrease counter</button>
    </>
    
  )
}

export default App
