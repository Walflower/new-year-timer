// Function to count down until new year.

const countDownDate = new Date("Jan 1, 2025 ").getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  const now = new Date();
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("count").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  // If the count down is finished,show Happy New Year
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "HAPPY NEW YEAR 🎉";
  }
}, 1000);
