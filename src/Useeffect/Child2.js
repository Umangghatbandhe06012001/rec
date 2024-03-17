import React, {useEffect} from 'react';

export default function Child2() {
    useEffect(()=>{
        console.log("Child2 is mounted");

        return () => console.log("Child2 is unmounted");
    },[])
  return (
    <div><p>I am Child 2!</p></div>
  )
}
