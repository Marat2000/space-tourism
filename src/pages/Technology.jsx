import {useContext} from 'react'
import {AppContext} from '../App'

import data from '../data.json'
data=data.technology


const Technology=()=>
{

const {setPage , tech, setTech}=useContext(AppContext)
setPage(3)

return(
	<>	
<div style={{paddingTop:'7vw',paddingLeft:'7vw' , marginBottom:'2rem' ,letterSpacing:'.3rem', fontWeight:'bold', fontFamily:'var(--TitleFont)' }} ><span style={{color:'var(--Text'}} >03</span> SPACE LAUNCH 101</div>
<div  className='technology'  >
<ul className='technologyPages'>
	<li onClick={()=>setTech(0)} className={tech==0&&'clickedTechnologyPage'}>1</li>
	<li onClick={()=>setTech(1)} className={tech==1&&'clickedTechnologyPage'}>2</li>
	<li onClick={()=>setTech(2)} className={tech==2&&'clickedTechnologyPage'}>3</li>
</ul>

{data.filter(el=>data.indexOf(el)==tech).map(item=>{return(
<>
<div className='technologyText' >
<div className='technologyTitle'>the terminology...</div>
<div className='technologyName'>{item.name} </div>
<div className='technologyDescription'>{item.description}</div>
</div>
<div className='technologyImg' style={{backgroundImage:`url(${item.images.portrait})`}} ></div>
</>
)})}
</div>

</>



)
}

export default Technology