import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import IndividualBlogs from './pages/IndividualBlogs';
import StopwatchParent from './pages/stopwatch/StopwatchParent';
import Crypto from './pages/crypto_proj/App'
import BlogsHome from './pages/BlogsHome';
import BlogLayout from './BlogLayout';
import ConceptSearch from './pages/ConceptSearch';
import DBZ from './DBZ';

export default function App() {
  return (
    <>
        <Routes>
<<<<<<< Updated upstream
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About />}/>
=======
            <Route path='/Home' index element={<Home/>}/>
            <Route path='/about' element={<div>This is new baout </div>}/>
>>>>>>> Stashed changes
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/contact-us' element={<Navigate to='/contact'/>}/>

            <Route path='/query' element={<setQuery/>}/>

            <Route path='/blogs' element={<BlogLayout/>}>
              <Route index element={<BlogsHome />}/>
              <Route path=':id' element={<IndividualBlogs />} />
              {/* <Route   /> */}
              <Route path='category/:categoryId' element={<IndividualBlogs />} />
            </Route>

            <Route path='/concept-search' element={<ConceptSearch/>}/>
            <Route path='/dbz' element={<DBZ/>}/>


            <Route path='/stopwatch' element={<StopwatchParent/>}/>
            <Route path='/crypto' element={<Crypto/>}/>
            <Route path='*' element={<NotFound />} />
            

        </Routes>
    </>
  )
}
