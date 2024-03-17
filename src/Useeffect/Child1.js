import React, {useEffect} from 'react';

export default function Child1() {
    useEffect(()=>{
        console.log("Child1 is mounted");

        return () => console.log("Child1 is unmounted");
    },[])
    return (
    <div>
        <div><p>I am Child 1!</p></div>
    </div>
  )
}
