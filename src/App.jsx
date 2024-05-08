import './App.css'
import './css/reset.css'

import Navbar from './components/navbar/navbar'
import Home from './Pages/Home/Home'
import MyList from './Pages/MyList/MyList'
import MovieDetail from './Pages/MovieDetail/MovieDetail'

import { Route, Routes } from 'react-router-dom'
import { HOME, MY_LIST } from './constants/path'

function App() {
  return (
      <div className='app'>
          <Navbar />
          <Routes>
            <Route index path={HOME} element={<Home />}/>
            <Route path={MY_LIST} element={<MyList />}/>
            <Route path={`${HOME}/:id`} element={<MovieDetail />}/>
          </Routes>
      </div>
  )
}

export default App
