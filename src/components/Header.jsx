import {useContext} from 'react'
import {AppContext} from '../App'
import {Link} from 'react-router-dom'


const Header=()=>{

const {page,setPage,menuHide, visibility }=useContext(AppContext)

return(
<header>
  <img  className='logo' src="./assets/shared/logo.svg" alt='logo'/>
<div className='menuLine'></div>
<img className='hamburger' onClick={menuHide} style={{display:`${visibility?'none':'block'}`}} src='./assets/shared/icon-hamburger.svg' alt=''/>
<img className='hamburger' onClick={menuHide} style={{display:`${visibility?'block':'none'}`}} src='./assets/shared/icon-close.svg' alt=''/>
<div className='overlay' onClick={menuHide} style={{ display:`${visibility?'block':'none'}` }}  ></div>
  <div  className={'menu '+`${visibility&& "hamburgerClicked"} `  } >
<div className='menuItems'>
		
 <span onClick={()=>{setPage(0);menuHide()}} className={page==0&&'menuClicked'} >
 	<Link to='space-tourism/' className='link'>	 		   <span className='menuNumber'>00  </span><span style={{opacity:'.75'}} >Home</span>		   </Link></span>			
 
 <span onClick={()=>{setPage(1);menuHide()}} className={page==1&&'menuClicked'} >
 	<Link to='space-tourism/destination/' className='link'><span className='menuNumber'>01  </span><span style={{opacity:'.75'}} >Destination</span> </Link></span>	
 		
 <span onClick={()=>{setPage(2);menuHide()}} className={page==2&&'menuClicked'} >
 	<Link to='space-tourism/crew/' className='link'>	  <span className='menuNumber'>02  </span><span style={{opacity:'.75'}} >Crew</span> 		    </Link></span>			
 

 <span onClick={()=>{setPage(3);menuHide()}} className={page==3&&'menuClicked'} >
 	<Link to='space-tourism/technology/' className='link'><span className='menuNumber'>03  </span><span style={{opacity:'.75'}} >Technology</span> 	 </Link></span>	
</div>
<div className={'menuFon '+`${page==0?'a':page==1?'b':page==2?'c':'d'}` }></div>
</div>
</header>
)}

export default Header