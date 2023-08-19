import React from 'react'
import './App.css';
import Info from './pages/Info'
import { Routes, Route } from 'react-router-dom'
import Statii from './pages/Statii'
import Otzivi from './pages/Otzivi'
import { Layout } from './components/Layout';
import NotFound from './pages/NotFound'
import Post from './pages/Post';


const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Statii/>}/>
                <Route path='/posts/:id' element={<Post/>}/>
                <Route path='info' element={<Info/>} />
                <Route path='stati' element={<Statii/>}/>
                <Route path='otzivi' element={<Otzivi/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default App
