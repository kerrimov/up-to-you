import { App } from "../app/app";
import { Card } from "../app/main/card";

const app = new App();
app.mount();

const card = new Card();

card.MountCard(10).then(res => { const status = document.getElementById("status");
  status.appendChild(res);
});

//   .then(() =>
// {
//   // const card =  document.querySelector("card__container");
//   card.addEventListener('scroll', function() {
//     if ((card.scrollTop) >= card.offsetHeight) {
//       card.MountCard(10).then(r => {
//         const status = document.getElementById("status");
//         status.appendChild(r);
//       });
//     }
//   })
// })