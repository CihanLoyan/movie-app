import React from 'react'
import './navbar.css'
import { HOME, MY_LIST} from '../../constants/path'

import { TiHome } from 'react-icons/ti'
import { FaHeart } from 'react-icons/fa'
import { PiFilmReelFill } from 'react-icons/pi'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { movies } = useSelector((store) => store.favorite)
  return (
    <div className='navbar'>
        <div className="left">
            <h1>Movie App</h1>
        </div>
        <div className="center">
            <Link to={HOME}><PiFilmReelFill className='logo'/></Link>
        </div>
        <div className="right">
            <ul>
                <li>
                    <Link to={`${HOME}`}><TiHome /></Link>
                </li>
                <li>
                    <Link to={`${MY_LIST}`}>
                        <FaHeart />
                        <div className='favorite-count'>{movies.length}</div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar