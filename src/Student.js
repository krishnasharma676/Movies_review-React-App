import React from 'react'
import Comp from './components/Comp'
import PropTypes from 'prop-types'

const Student = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <Comp name={props.name}/>
    </div>
  )
}
Student.prototype = {
    name : PropTypes.string,
    age : PropTypes.number
}

Student.defaultProps = {
    name : "krishna",
    age : 0
}

export default Student
