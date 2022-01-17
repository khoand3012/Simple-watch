const hoursElement = document.getElementById("hour_hand");
const minutesElement = document.getElementById("minute_hand");
const secondsElement = document.getElementById("second_hand");
const textElement = document.getElementById("hour_text");

function animate() {
  const date = new Date();

  const hour = date.getHours() + date.getMinutes() / 60;
  const minute = date.getMinutes() + date.getSeconds() / 60;
  const second = date.getSeconds() + date.getMilliseconds() / 1000;

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
  secondsElement.setAttribute("transform", `rotate(${(360 / 60) * second})`);
  textElement.textContent = date.toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
