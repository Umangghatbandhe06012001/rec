import React, { useState } from 'react';
import WatchComponent from './watchComponent';

export default function App() {
  const [isSw1,setisSW1] = useState(false)
  return (
    <div>
      {isSw1 ? <WatchComponent/>:""}
      <button onClick={()=>{setisSW1(!isSw1)}}>{!isSw1 ? "Mounted" :"UnMounted"}</button>
    </div>

    
  )
}
