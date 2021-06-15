export const baseURL = 'http://localhost:3001'

export const getUrls = () => {
  return fetch(`${baseURL}/api/v1/urls`)
    .then(response => response.json())

}
