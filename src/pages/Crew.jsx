import {useContext, useState ,useEffect} from 'react'
import {AppContext} from '../App'

import datas from '../data.json'
const {crew:data}=datas

const Crew=()=>
{
const {setPage , slider,setSlider , minHeight,setMinHeight}=useContext(AppContext)


setPage(2)

const sliders=(item)=>
{
	let i=data.indexOf(item)
	if(i<data.length-1)
	setSlider(-(i+1)*100);
else if(i==data.length-1)
	setSlider(0)
	
}






return(
<>




<div style={{paddingTop:'7vw',paddingLeft:'7vw' , marginBottom:'2rem' ,letterSpacing:'.3rem', fontWeight:'bold', fontFamily:'var(--TitleFont)' }} ><span style={{color:'var(--Text'}} >02</span> MEET YOUR CREW</div>


<div className='crew'  >
<div  className='crewAllInfo'  >
{data.map(item=>{return(

	<div key={item.name} className='crewInfo' onClick={()=>sliders(item)} style={{ opacity:`${ data.indexOf(item)==slider/-100 ?'1':'0'}`,transform:`translateX(${slider}%)`,    }}>
<div className='crewRole'>{item.role}</div>
<div className='crewName'>{item.name}</div>
<div className='crewBio'  >{item.bio}</div>
</div>
)})}
</div>

<div className='crewPagesCircles'   >
{data.map(item=>{return(

<div key={item.name} onClick={()=>sliders(item)} className='crewPagesCircle'  style={{  backgroundColor:`${slider/(-100)==data.indexOf(item) ?'white':'#444'}`}} ></div>
)})}
</div>

<div className='crewAllImgs'>
{data.map(item=>{return(
<div key={item.name} onClick={()=>sliders(item)} style={{display:'grid'}} >
<div className='crewImg'  style={{ opacity:`${ data.indexOf(item)==slider/-100 ?'1':'0'}` ,transform:`translateX(${slider}%)`, backgroundImage:`url(${item.images.webp})`}} ></div>
</div>

)})}
</div>
</div>


</>
)
}

export default Crew