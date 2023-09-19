import React from 'react'
import plane from '../../assets/plane.png'
import homeVid from '../../assets/homeVid.mp4'

const Home = () => {
  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1>Create Ever-<br/>lasting Memories With  Us</h1> 
      </div>

      <div className="homeImages flex">

          <div className="videoDiv">
            <video src={homeVid} autoPlay muted loop className='video'></video>
          </div>
          
          <img src={plane} className='plane' />
      </div>
    </div>
  )
}

export default Home