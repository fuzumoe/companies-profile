import React, {useState, useEffect} from 'react'
import SearchButtonGroup from '../SearchButtonGroup/SearchButtonGroup'
import SearchInput from '../SearchInput/SearchInput'
import './SearchBar.css'

 
const SearchBar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  /* eslint-disable no-unused-vars */
  const [placeholder, setPlaceholder] = useState(props.placeholder || "")  
  
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
    <section>
      {(toggleMenu || screenWidth >  1000) && (
      <ul>
  
      <li>
        <SearchInput value={props.companyName} placeholder={placeholder} searchOnChangHandler={props.searchOnChangHandler} />
      </li>
      <li>
        <SearchButtonGroup setSelectedSpecilities={props.setSelectedSpecilities}
                specialitesList={props.specialitesList}
                specialities = {props.specialities}/>
    
      </li>
    </ul>
      )}

      <button onClick={toggleNav} className="btn" >
        
<svg data-testid="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-funnel" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
</svg>
      </button>
    </section>
  )
}

export default SearchBar;
