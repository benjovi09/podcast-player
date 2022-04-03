const podcastAudio = document.getElementById('podcast-audio')
let markerHtmlCollection = document.getElementsByClassName('podcast-marker')
const markerList = Array.from(markerHtmlCollection)

const hideAllMarkers = () => {
  markerHtmlCollection = markerList.map(hideMarker)
}

const pollAudioCurrentTime = () => {
  console.log(podcastAudio.currentTime)
}

const showMarker = (marker) => {
  marker.style.visibility = 'visible'
  marker.style.display = 'inline'
  return marker
}

const hideMarker = (marker) => {
  marker.style.visibility = 'hidden'
  marker.style.display = 'none'
  return marker
}

const handlePlay = (event) => {
  setInterval(pollAudioCurrentTime, 1000)
}

const showMarkersByStartTime = () => {
  markerHtmlCollection = markerList.map((m) => {
    console.log('marker start time: ', m.getAttribute('start'))
    console.log(
      'marker time diff: ',
      Math.abs(m.getAttribute('start') - podcastAudio.currentTime),
    )
    if (Math.abs(m.getAttribute('start') - podcastAudio.currentTime) > 2) {
      console.log('showMarker')
      showMarker(m)
    }
  })
}

const toggleAudioTimePolling = () => setInterval(showMarkersByStartTime, 500)
podcastAudio.addEventListener('play', toggleAudioTimePolling)
window.onload = hideAllMarkers
