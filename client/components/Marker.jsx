import React from 'react'

const ImageMarker = ({ start, duration, source }) => (
  <img
    className="podcast-marker"
    src={'http://localhost:1337' + source}
    start={start}
    duration={duration}
  />
)

const AdMarker = ({ start, duration, link, content }) => (
  <a className="podcast-marker" href={link} start={start} duration={duration}>
    {content}
  </a>
)

const TextMarker = ({ start, duration, content }) => (
  <p className="podcast-marker" start={start} duration={duration}>
    {content}
  </p>
)

const renderMarkerType = (props) => {
  switch (props.type) {
    case 'ad':
      return (
        <AdMarker
          key={props.start}
          link={props.link}
          content={props.content}
          start={props.start}
          duration={props.duration}
        />
      )
    case 'text':
      return (
        <TextMarker
          key={props.start}
          content={props.content}
          start={props.start}
          duration={props.duration}
        />
      )
    case 'image':
      return (
        <ImageMarker
          key={props.start}
          source={props.content}
          start={props.start}
          duration={props.duration}
        />
      )
  }
}

const Marker = ({ props }) => renderMarkerType(props)

export default Marker
