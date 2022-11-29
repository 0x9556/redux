import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './homeSlice'



const Home = memo(() => {


  const { isLoading, cart } = useSelector(state => state.home)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getData())


  }, [])


  return (

    <div>
      {!isLoading &&
        <ul>
          {
            cart.map(item => {
              return (
                <li key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.img} alt="" />
                </li>
              )

            })
          }
        </ul>}

    </div>
  )


})

export default Home