import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../actions'

const TestContainer = () => {
    const dispatch= useDispatch()
    const {data, loading} = useSelector((state)=> state.testData)
    console.log({data, loading})

    const handleClick=() => {
        dispatch(updateData('Hello World!!'))
    }

  return (
    <div>
      Test Container
      <button onClick={handleClick}>Click Me</button>
      <br />
      {data}
      <br />
      {loading}
    </div>
  )
}

export default TestContainer
