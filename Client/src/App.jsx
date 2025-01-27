import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import MovieList from './components/MovieList'
import AddMovie from './components/AddMovie'
import ManageMovie from './components/ManageMovie'
import Login from './components/Login'


function App() {

  return (
    <Router basename='/'>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="admin/add-movie" element={<AddMovie />} />
        <Route path="admin/manage-movie" element={<ManageMovie />} />
      </Routes>
    </Router>
  )
}

export default App
