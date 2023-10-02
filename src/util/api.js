export async function fetcher(apiRoute) {
  const url = "https://fakestoreapi.com/products/" + apiRoute

  const response = await fetch(url)
  const data = await response.json()
  return data
}
