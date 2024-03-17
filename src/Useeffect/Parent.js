import React, { useEffect, useState } from 'react';
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Parent() {
  const [ToShowChild,setToShowChild] = useState(true);
  useEffect(()=>{
    console.log("Parent got changed!");
  })

  function toggle(){
    setToShowChild(!ToShowChild);
  }
  
  return (
    <div>
        {ToShowChild ? <Child1 />:<Child2/>}
        <button onClick={toggle}>ChildToShow</button>
    </div>
  )
}
