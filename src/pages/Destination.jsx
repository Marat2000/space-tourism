import datas from '../data.json'
import {useContext} from 'react'
import {AppContext} from '../App'

const {destinations:data} =datas

const Destination =()=>{

const {setCosmicBody,cosmicBody,setPage}=useContext(AppContext)

setPage(1)


return(<div style={{padding:'7vw' , paddingBottom:'0'}}>

<div style={{letterSpacing:'.3rem', fontWeight:'bold', fontFamily:'var(--TitleFont)' }} ><span style={{color:'var(--Text'}} >01</span> PICK YOUR DESTINATION</div>
<ul className='cosmicBody'>
<li	onClick={()=>setCosmicBody(0)} className={cosmicBody==0&&'cosmicBodyClicked'}	>Moon	</li>	
<li	onClick={()=>setCosmicBody(1)} className={cosmicBody==1&&'cosmicBodyClicked'}	>Mars	</li> 
<li	onClick={()=>setCosmicBody(2)} className={cosmicBody==2&&'cosmicBodyClicked'}	>Europa	</li> 	
<li	onClick={()=>setCosmicBody(3)} className={cosmicBody==3&&'cosmicBodyClicked'}	>Titan	</li> 	
</ul>


{data.filter(el=>data.indexOf(el)==cosmicBody).map((item)=>{return(
<div key={item.name} className='destination' >
<div className='destinationImage' >
<img src={item.images.webp}  className='destinationImage' />
</div>
<div className='destinationInfo' >
<div className='destinationName'> {item.name} </div>
<div className='destinationDescription'>{item.description} </div>

<div className='destinationBottomPanel'  >

<div className='bottomPanelText' >avg.distance
<div className='destinationDistance'>{item.distance} </div>
</div>

<div className='bottomPanelText' >est.travel time
<div className='destinationTravel'>{item.travel} </div>
</div>
</div>
</div>

</div>

)})}

	</div>)}

export default Destination