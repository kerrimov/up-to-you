let close = document.getElementById("sidebar__closebtn");
let sidebar = document.getElementById("sidebar");
let status = document.getElementById("status");

close.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--hidden");
});

status.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--hidden");
});
