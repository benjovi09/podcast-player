import React from 'react'
import Markers from './Markers'

export const PodcastPlayer = ({ name, source, markers }) => (
  <div>
    <h6>{name}</h6>
    <audio src={source} controls></audio>
    <Markers props={markers}></Markers>
  </div>
)
