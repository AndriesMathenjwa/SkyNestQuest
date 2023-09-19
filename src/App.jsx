import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Home from './componets/Home/Home'
import Search from './componets/Search/Search'
import Support from './componets/Support/Support'
import Info from './componets/Info/Info'
import Lounge from './componets/Lounge/Lounge'
import Travelers from './componets/Travelers/Travelers'
import Subscribers from './componets/Subscribers/Subscribers'
import Footer from './componets/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      {/* <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer /> */}
    </div>
  )
}

export default App