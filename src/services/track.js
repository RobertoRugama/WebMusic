import platziMusicServices from './platzi-music'

const trackServices = {}

trackServices.search = function (q) {
  const type = 'track'

  return platziMusicServices.get('/search', {
    params: { q, type }
  }).then(res => res.data)
}

trackServices.getById = function (id) {
  return platziMusicServices.get(`/tracks/${id}`)
    .then(res => res.data)
}
export default trackServices
