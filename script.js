const clockText = document.querySelector(".clock");
const dayText = document.querySelector(".day");
const yearText = document.querySelector(".year");
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
  const day = dateObject.getDay();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = dateObject.getMonth();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = dateObject.getFullYear();
  dayText.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  yearText.innerHTML = `${year}`;
}, 500);
