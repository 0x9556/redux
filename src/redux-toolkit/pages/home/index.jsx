import React, { memo, useEffect } from 'react'
import { getHomeData } from './homeThunk'
import { dispatch } from 'redux'


const Home = memo(() => {

  useEffect(() => {

    dispatch(getHomeData())

  },[])


  return (
    <div>Home</div>
  )


})

export default Home