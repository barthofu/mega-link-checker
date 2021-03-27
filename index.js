const fetch = require('isomorphic-fetch')

module.exports = url => {

  const api = 'https://g.api.mega.co.nz'

  const type = url.split("/")[3]
  const id = url.split("/")[4].split("#")[0]

  let payload
  if (type === 'folder') {
    payload = { a: 'f', c: 1, r: 1, ca: 1 }
  } else {
    payload = { a: 'g', p: id }
  }

  return fetch(
    `${api}/cs?id=${Math.random().toString().substr(2, 10)}&n=${id}`,
    { method: 'POST', body: JSON.stringify([payload]) }
  )
    .then(res => res.json())
    .then(res => {

        if (typeof res === 'number' && res < 0) return false
        else return true
        
    })
}