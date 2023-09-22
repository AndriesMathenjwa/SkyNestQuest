import React from 'react'
import imgGrid from '../../assets/logo.png'

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
  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2>
          Top travelers of the month
        </h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id, destinationImage,travelerImage,travelerName,socialLink })=>{
              return(
                <div key={id} className="singleTraveler">

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