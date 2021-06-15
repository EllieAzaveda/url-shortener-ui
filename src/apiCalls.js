export const baseURL = 'http://localhost:3001'

export const getUrls = () => {
  return fetch(`${baseURL}/api/v1/urls`)
    .then(response => response.json())

}

export const postURL = (urlInput) => {
  return fetch(`http://localhost:3001/api/v1/urls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...urlInput })
  })
  .then(response => {
    return response.json()
  })
}
