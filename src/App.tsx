import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Lessons from './Pages/Lessons'
import LessonEditor from './Pages/Lesson-Editor'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route> */}
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/lessons' element={<Lessons /> } />
        <Route path='/create' element={<LessonEditor /> } />
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
