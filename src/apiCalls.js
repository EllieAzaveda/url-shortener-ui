export const checkForErr = (response) => {
  if(response.status >= 500) {
    return 'Uhoh! Something is wrong with our system. Please try back later.'
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}

export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
  .then(checkForErr)
}
