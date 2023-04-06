// Set the date of the next blood test
const nextBloodTestDate = new Date('2023-05-01');

// Update the countdown every second
setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining until the next blood test
  const timeRemaining = nextBloodTestDate.getTime() - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the countdown element with the time remaining
  document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h '
    + minutes + 'm ' + seconds + 's ';
}, 1000);
