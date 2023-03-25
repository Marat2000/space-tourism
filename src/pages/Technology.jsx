import {useContext} from 'react'
import {AppContext} from '../App'

import datas from '../data.json'
 const {technology:data}=datas


const Technology=()=>
{

const {setPage , tech, setTech , visibility}=useContext(AppContext)
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
<div className={`technologyImg ${ tech==0? 'technologyImga': tech==1?  'technologyImgb' : tech==2&& 'technologyImgc'}  `} ></div>
</>
)})}
</div>

</>



)
}

export default Technology