const clockText = document.querySelector(".clock");
const dateText = document.querySelector(".date");
console.log(new Date());
setInterval(() => {
  const dateObject = new Date();
  let hour = dateObject.getHours();
  const min = dateObject.getMinutes().toString().padStart(2, "0");
  const sec = dateObject.getSeconds().toString().padStart(2, "0");
  const meridiem = hour > 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  clockText.innerHTML = `${hour
    .toString()
    .padStart(2, "0")}:${min}:${sec} ${meridiem}`;

  const date = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();
  dateText.innerHTML = `${date}.${month}.${year}`;
}, 500);
