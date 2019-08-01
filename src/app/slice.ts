import { fetchAsync } from "../ts/data";

const data = fetchAsync();
let offset =  10;
export class Slice {
  render() {
    let step = 5;
    let result = data.then(data => data.slice(offset, offset+step));
    offset += step;
    return result;
  };
}