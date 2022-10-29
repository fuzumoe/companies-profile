import React, {useState, useEffect} from 'react'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import SearchInput from '../SearchInput/SearchInput'
import './SearchBar.css'

const SearchBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
            
      <li className="items">
        <SearchInput value={props.companyName} placeholder={props.placeholder} searchOnChangHandler={props.searchOnChangHandler}></SearchInput>
      </li>
      <li className="items">
        <ButtonGroup toggleBtnGroupHandler={props.toggleBtnGroupHandler}  buttons={props.specialities}></ButtonGroup>
    
      </li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn">Search</button>
    </nav>
  )
}

export default SearchBar;
