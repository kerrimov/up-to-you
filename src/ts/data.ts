export async function fetchAsync() {
  let response = await fetch("../cards2.1.json");
  let data = await response.json();
  return data;
}
