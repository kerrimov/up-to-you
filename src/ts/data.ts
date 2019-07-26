export async function fetchAsync () {
  let response = await fetch('../cards.json');
  let data = await response.json();
  return data;
}