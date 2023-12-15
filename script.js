const clock = document.querySelector(".clock");

setInterval(() => {
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes().toString().padStart(2, "0");
  const sec = date.getSeconds().toString().padStart(2, "0");
  const meridiem = hour > 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  console.log(hour);
  clock.innerHTML = `${hour
    .toString()
    .padStart(2, "0")}:${min}:${sec} ${meridiem}`;
}, 500);
