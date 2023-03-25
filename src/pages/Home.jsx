import {useContext} from 'react'
import {AppContext} from '../App'
const Home =()=>{


const {setPage}=useContext(AppContext)

setPage(0)

return(


<main>  
<div className='container'>
  <div className='textPart'>
  <h2 className='title'>So, you want to travel to</h2>
 <h1 className='heading'>Space</h1>
  <p className='text'>Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
</div>
  <h2 className='circle'>Explore</h2>
</div>
</main>

)}

export default Home