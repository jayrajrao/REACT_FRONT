import React, { useEffect } from 'react'
import { useState } from 'react';
function UseEffect1() {
    const[count,setCount]=useState(100);
    const[data,setData]=useState(10);
    useEffect (()=>{
       console.log('Called with data state')
    })
    useEffect (()=>{
        console.warn('Count is ' + count)
     })
  return (
    <>
      <h1>useEffect with condition</h1>
        <h1>Count : {count} </h1>
        <h1>Data: {data}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setData(data+1)}>Data Count</button>
    </>
  )
}

export default UseEffect1
