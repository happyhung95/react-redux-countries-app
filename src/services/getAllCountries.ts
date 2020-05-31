export async function getAllCountries() {
  const URL = 'https://restcountries.eu/rest/v2/all'
  const cacheStorage = await caches.open('AllCountries')
  let cacheResponse = await cacheStorage.match(URL)

  if (!cacheResponse || !cacheResponse.ok) {
    await cacheStorage.add(URL)
    cacheResponse = await cacheStorage.match(URL)
  }

  return await cacheResponse?.json()
}
