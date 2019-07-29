export function Render(data) {
  data.then(response => {
    response.map(item => {
      item.modules.map(element => {
        for (let key in element.moduleStatus) {
          if (element.moduleStatus.key == "not_done") {
            const cardContainerNotDone = document.getElementById(
              "card__container--not_done"
            );
            cardContainerNotDone.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else if (element.moduleStatus.key == "in_progress") {
            const cardContainerInProgress = document.getElementById(
              "card__container--in_progress"
            );
            cardContainerInProgress.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else if (element.moduleStatus.key == "suspended") {
            const cardContainerSuspended = document.getElementById(
              "card__container--suspended"
            );
            cardContainerSuspended.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else if (element.moduleStatus.key == "high_priority") {
            const cardContainerHighPriority = document.getElementById(
              "card__container--high_priority"
            );
            cardContainerHighPriority.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else if (element.moduleStatus.key == "rejected") {
            const cardContainerRejected = document.getElementById(
              "card__container--rejected"
            );
            cardContainerRejected.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else if (element.moduleStatus.key == "done") {
            const cardContainerDone = document.getElementById(
              "card__container--done"
            );
            cardContainerDone.innerHTML += `<div class="card">
              <div class="card__header"><h4>${item.courseTitle}</h4></div>
              <div class="module__container">
              <div class="module"><p>${element.moduleTitle}</p></div>
              </div>`;
          } else {
            console.log("Something wrong with JSON data");
          }
        }
      });
    });
  });
}
