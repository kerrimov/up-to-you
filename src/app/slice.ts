import { fetchAsync } from "../ts/data";

const data = fetchAsync();

let start = 0;
export class Slice {
  render() {
    let step = 5;
    let result = data.then(data => data.slice(start, start+step));
    start = start+step;
    return result;
  };
}