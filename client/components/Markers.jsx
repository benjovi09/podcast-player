import React from 'react'
import Marker from './Marker'

const Markers = ({ props }) => (
  <div>
    {props.map((marker) => (
      <div key={marker.start}>
        <Marker props={marker}></Marker>
      </div>
    ))}
  </div>
)

export default Markers
