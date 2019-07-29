export async function getData(baseURL:string, path:string) {
  let response = await fetch(baseURL + path);
  let data = await response.json();
  return data;
}
