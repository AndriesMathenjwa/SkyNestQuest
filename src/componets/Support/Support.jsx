import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Support = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='support container section'>
      <div className="sectionContainer">

        <div className="tittlesDiv">
          <small>Travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expect along the jorney!</p>
        </div>
        <div className="infoDiv grid">

          <div className="textDiv grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
              <span className='number colorOne'>01</span>
              <h4>travel requirements for Dubai</h4>
              <p>
              Find help with booking and travel plans, see what to expect along the jorney to your favourite destinations!
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
              <span className='number colorTwo'>02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
              Find help with booking and travel plans, see what to expect along the jorney to your favourite destinations!
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
              <span className='number colorOne'>03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
              Find help with booking and travel plans, see what to expect along the jorney to your favourite destinations!
              </p>
            </div>

          </div>

          <div data-aos='fade-up' data-aos-duration='2500'  className="imgDiv">
            <img src="" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Support