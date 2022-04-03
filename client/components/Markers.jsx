import React from 'react'
import Marker from './Marker'

const Markers = ({ props }) => (
  <ol>
    {props.map((marker) => (
      <li key={marker.start}>
        <Marker props={marker}></Marker>
      </li>
    ))}
  </ol>
)

export default Markers
