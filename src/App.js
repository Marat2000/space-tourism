import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Header from './components/Header'
import {createContext,useState,useEffect , useRef} from 'react'
import { Routes,Route } from 'react-router-dom'
export const AppContext=createContext({})



function App() {

const [page,setPage]=useState(0)
const [cosmicBody,setCosmicBody]=useState(0)
const [slider,setSlider]=useState(0)
const [tech,setTech]=useState(0)
const [visibility,setVisibility]=useState(false)

const menuHide=()=>
{
	setVisibility(!visibility)
}

  return (<AppContext.Provider   value={{ page,setPage , setCosmicBody, cosmicBody , slider , setSlider , tech, setTech,menuHide , visibility  }}>
  

  	<div  className={'back '+`${page==0?'a':page==1?'b':page==2?'c':'d'}` }>
<Header/>

<Routes>
<Route  path='space-tourism/' exact element={ <Home/>  }   		/>
<Route  path='space-tourism/destination/' exact element={ <Destination/>  }  />
<Route  path='space-tourism/crew/' exact element={ <Crew/>  }   			 />
<Route  path='space-tourism/technology/' exact element={ <Technology/>  }   />


</Routes>





</div>
  </AppContext.Provider>)}


export default App;
