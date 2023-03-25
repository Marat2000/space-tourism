import {useContext, useState ,useEffect} from 'react'
import {AppContext} from '../App'
import Slider from 'react-touch-drag-slider'

import datas from '../data.json'
const {crew:data}=datas

let empty=[];
empty.length=data.length+1
empty.fill(null)



const Crew=()=>
{
const {setPage , slider,setSlider , minHeight,setMinHeight}=useContext(AppContext)

setPage(2)


 const sliderSwipe=(i)=>
{
	if(i<empty.length-1)
		setSlider(i);
	if(i==empty.length-1)
		setSlider(0);
}

const sliderClick=()=>
{
setSlider(slider)
	console.log(slider)
	if(slider<empty.length-2)
		setSlider(slider+1)
	else
		setSlider(0)
}


return(
<>
<div   onClick={sliderClick } className="sliderOverlay" >
<Slider  activeIndex={slider}  onSlideComplete={(i)=> sliderSwipe(i) }     >
{empty.map((item)=>{return(

	<div id='react-touch-drag-slider' >{empty.indexOf(item)}</div>
)})}
</Slider>
</div>

<div style={{paddingTop:'7vw',paddingLeft:'7vw' , marginBottom:'2rem' ,letterSpacing:'.3rem', fontWeight:'bold', fontFamily:'var(--TitleFont)' }} ><span style={{color:'var(--Text'}} >02</span> MEET YOUR CREW</div>


<div className='crew'  >

	<div className='crewAllInfo'  >

{data.map(item=>{return(

	<div key={item.name}   style={{ transform:`translateX(${-(slider*100)}%)`,    }}>
<div className='crewRole'>{item.role}</div>
<div className='crewName'>{item.name}</div>
<div className='crewBio'  >{item.bio}</div>
</div>
)})}
</div>

<div className='crewPagesCircles'   >
{data.map(item=>{return(

<div key={item.name}  className='crewPagesCircle'  style={{  backgroundColor:`${slider==data.indexOf(item) ?'white':'#444'}`}} ></div>
)})}
</div>


<div className='crewAllImgs'   >
{data.map(item=>{return(
<div key={item.role}  style={{display:'grid'}} >
<div className='crewImg'  style={{ transform:`translateX(${-(slider*100)}%)`,  backgroundImage:`url(${item.images.webp})`}} ></div>
</div>
)})}
</div>
</div>
</>
)
}

export default Crew