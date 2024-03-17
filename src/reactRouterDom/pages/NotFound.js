<<<<<<< Updated upstream
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/' , {state: {isRedirected: true}})
    },1000)
  },[])
=======
import React ,{useEffect}from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate =  useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/Home');
    },1000)
  },[]);
>>>>>>> Stashed changes
  return (
    <div>NotFound</div>
  )
}
/* 
  9:57 -> 
*/
