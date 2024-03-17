import React, { useEffect,useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

export default function App() {
  const [data,setData] = useState("");
  const [api,setApi] = useState([]);
  const [page,setPage] = useState(0);
  async function fetching(){
    const resp = await fetch(`https://api.frontendexpert.io/api/fe/cryptocurrencies/?page=${page}`);
    if(!resp.ok){
      throw new Error("Error fetching the Api");
    }
    const data = await resp.json();
    setData(data);
    setApi(data.coins);
    // console.log(data.coins);
    
  }
  useEffect(()=>{
    fetching();
  },[page]);

  function pagination(val){
    console.log("hello");
    if(val === "prev"){
      if(page === 0){
        return;
      }else{
        setPage(page - 1);
       
        return;
      }
    }
    if(val === "next"){
      if(data.hasNext){
        setPage(page + 1);
     
        return
      }else{
        return;
      }
    }
  }
  return (
    <div className='table'>
      <thead>
        <tr>
          <th className='data'>Coin Name</th>
          <th className='data'>Price</th>
          <th className='data'>Market Cap</th>
        </tr>
      </thead>
      <tbody>
        {api.map((element) => {
          return <tr key={uuidv4()}>
              <td className='data'>{element.name}</td>
              <td className='data'>{element.price}</td>
              <td className='data'>{element.marketCap}</td>
            </tr>

          
        })}


      </tbody>
      <div className='btn'>
        <button disabled = {(page === 0) ? true: false} onClick={() => pagination("prev")} className='btnPage'>Prev</button>
        <button disabled ={(data.hasNext)?false:true} onClick={() => pagination("next")} className='btnPage'>Next</button>
      </div>

    </div>
  )
}
