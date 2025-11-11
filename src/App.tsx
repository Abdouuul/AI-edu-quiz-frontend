import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Lessons from './Pages/Lessons'
import LessonEditor from './Pages/Lesson-Editor'
import Quizzes from './Pages/Quiz'
import QuizDetails from './Pages/QuizDetail'
import Signup from './Pages/Signup'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route> */}
        <Route path='/' element={<Home /> } />
        <Route path='/login' element={<Login /> } />
        <Route path='/lessons' element={<Lessons /> } />
        <Route path='/lessons/:id' element={<LessonEditor /> } />
        <Route path='/create' element={<LessonEditor /> } />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:id" element={<QuizDetails />} />
      {/* </Route> */}
        <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
