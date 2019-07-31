export async function fetchAsync() {
  let response = await fetch("../cards3.json");
  let data = await response.json();
  return data;
}
