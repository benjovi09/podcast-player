import React from 'react'
import Markers from './Markers'

export const PodcastPlayer = ({ name, source, markers }) => {
  return (
    <div>
      <h1>{name}</h1>
      <audio id="podcast-audio" src={source} controls></audio>
      <Markers props={markers}></Markers>
    </div>
  )
}
