import React from 'react'

const ImageMarker = ({ source }) => (
  <img src={'http://localhost:1337' + source} />
)

const AdMarker = ({ link, content }) => <a href={link}>{content}</a>

const TextMarker = ({ content }) => <p>{content}</p>

const renderMarkerType = (props) => {
  switch (props.type) {
    case 'ad':
      return (
        <AdMarker key={props.start} link={props.link} content={props.content} />
      )
    case 'text':
      return <TextMarker key={props.start} content={props.content} />
    case 'image':
      return <ImageMarker key={props.start} source={props.content} />
  }
}

const Marker = ({ props }) => renderMarkerType(props)

export default Marker
