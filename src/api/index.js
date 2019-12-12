const URL = 'https://api.unsplash.com/photos/'
const KEY = '?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export const fetchImages = async () => {
  const res = await fetch(`${URL}${KEY}`)
  const data = await res.json()
  if (res.status >= 400) {
    throw new Error(data.error)
  }
  return data
}
