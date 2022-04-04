const podcastAudio = document.getElementById('podcast-audio')
let markerHtmlCollection = document.getElementsByClassName('podcast-marker')
const markerList = Array.from(markerHtmlCollection)

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

const hideAllMarkers = () => {
  markerHtmlCollection = markerList.map(hideMarker)
}

const showMarkersByStartTime = () => {
  markerHtmlCollection = markerList.map((m) => {
    if (
      podcastAudio.currentTime - m.getAttribute('start') >= 0 &&
      podcastAudio.currentTime - m.getAttribute('start') <
        m.getAttribute('duration')
    ) {
      showMarker(m)
    } else hideMarker(m)
  })
}

let pollingIntervalId
const startAudioTimePolling = () => {
  if (pollingIntervalId) {
    console.warn('pollingIntervalId already has a value')
  }
  pollingIntervalId = setInterval(showMarkersByStartTime, 500)
}
const stopAudioTimePolling = () => {
  if (!pollingIntervalId) {
    console.warn('pollingIntervalId has already been cleared')
  }
  clearInterval(pollingIntervalId)
  pollingIntervalId = null
}

podcastAudio.addEventListener('play', startAudioTimePolling)
podcastAudio.addEventListener('pause', stopAudioTimePolling)
window.onload = hideAllMarkers
