import React from 'react'
import Homebanner from '../components/Homebanner'
import Homearrivals from '../components/Homearrivals'
import Homeproduct from '../components/Homeproduct'
import Homeshop from '../components/Homeshop'
import Homeclock from '../components/Homeclock'
import Homespecial from '../components/Homespecial'

const Home = () => {
  return (
     <>
        <Homebanner/>
        <Homeshop/>
        <Homearrivals/>
        <Homeproduct/>
        <Homeclock/>
        <Homespecial/>
     </>
  )
}

export default Home