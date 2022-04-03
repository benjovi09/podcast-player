import React from 'react'
import { PodcastPlayer } from './components/PodcastPlayer'

export const App = ({ props }) => (
  <div>
    <PodcastPlayer
      name={props.name}
      source={`http://localhost:1337${props.audio}`}
      markers={props.markers}
    ></PodcastPlayer>
  </div>
)
