import React, {useState} from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import {CgMenuGridO} from 'react-icons/cg'


const Navbar = () => {
    // remove navBar from small screens********
    const [active, setActive] = useState('navBarMenu')
    const showMenuBar = ()=>{
      setActive('navBarMenu showNavBar')
    }

    const removeMenuBar = ()=>{
      setActive('navBarMenu')
    }

    // add background color to navbar************
    const [noBg, addBg] = useState('navBarMenu')
    const addBgColor = ()=>{
      if(window.scrollY >=10){
        addBg('navBarTwo navbar_With_Bg')
      }else{
        addBg('navBarTwo')
      }
    }

    window.addEventListener('scroll',addBgColor)
   

  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
            <SiConsul className='icon'/>
        </div>
        <div className="none flex">
            <li className='flex'> <BsPhoneVibrate/> Support</li>
            <li className='flex'> <AiOutlineGlobal/> Languages</li>
        </div>
        <div className="atb flex">
            <span>Sign In</span>
            <span>Sign Out</span>
        </div>
      </div>

      <div className={noBg}>

        <div className="logoDiv">
            <img src={logo} className='Logo' />
        </div>

        <div className={active}>
            <ul className='menu flex'>
                <li onClick={removeMenuBar} className='listItem'>Home</li>
                <li onClick={removeMenuBar} className='listItem'>About</li>
                <li onClick={removeMenuBar} className='listItem'>Offers</li>
                <li onClick={removeMenuBar} className='listItem'>Seats</li>
                <li onClick={removeMenuBar} className='listItem'>Destinations</li>
            </ul>
            <button onClick={removeMenuBar} className='btn flex btnOne'>
                Contact
            </button>
        </div>
        <button className='btn flex btnTwo'>
                Contact
            </button>

            <div onClick={showMenuBar} className="toggleIcon">
                <CgMenuGridO className='icon'/>
            </div>
      </div>
    </div>
  )
}

export default Navbar