import React, {useEffect} from 'react'
import imgGrid from '../../assets/logo.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers =[
  {
    id: 1,
    destinationImage: imgGrid,
    travelerImage: imgGrid,
    travelerName: 'Alex',
    socialLink: '@mathenjwafam'
  },
  {
    id: 1,
    destinationImage: imgGrid,
    travelerImage: imgGrid,
    travelerName: 'Andries',
    socialLink: '@mathenjwafam'
  },
  {
    id: 1,
    destinationImage: imgGrid,
    travelerImage: imgGrid,
    travelerName: 'Rose',
    socialLink: '@mathenjwafam'
  },
]

const Travelers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500' >
          Top travelers of the month
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id, destinationImage,travelerImage,travelerName,socialLink })=>{
              return(
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">

            <img src={destinationImage} className='destinationImage' />

            <div className="travelerDetails">
              <div className="travelerPicture">
              <img src={travelerImage} className='travelerImage' />
              </div>
              <div className="travelerName">
              <span>{travelerName}</span>
                <p>{socialLink}</p>
              </div>
            </div>

          </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )
}

export default Travelers