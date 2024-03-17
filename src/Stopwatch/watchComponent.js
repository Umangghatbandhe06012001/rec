import React, { useState, useEffect } from 'react';


let timer;
export default function WatchComponent() {
    const [count, setCount] = useState(10);
   

    useEffect(() => {
        // if (count !== 0) {
        //     const timerId = setTimeout(() => {
        //         setCount(prev => prev - 1);
        //     }, 1000);

        //     return () => clearTimeout(timerId);
        // }

       timer = setInterval(()=>{
            setCount((prev) => prev - 1);     
       },1000);
 
       return () => {
            clearInterval(timer);
       };
    
    },[]);

    useEffect(() => {
        if(count === 0){
            clearInterval(timer);
        }   
    },[count])

    return (
        <div>
            <h2>StopWatch</h2>
            <p>{count}</p>
        </div>
    );
}