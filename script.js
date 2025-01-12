const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const renderCalendar = () => {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  monthYear.textContent = `${new Date(currentYear, currentMonth).toLocaleString("en-us", { month: "long" })} ${currentYear}`;

  daysContainer.innerHTML = "";

  // Add empty spaces for previous month's days
  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += `<span></span>`;
  }

  // Add days of the current month
  for (let i = 1; i <= lastDate; i++) {
    daysContainer.innerHTML += `<span>${i}</span>`;
  }
};

// Event listeners for navigation
prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// Initialize the calendar
renderCalendar();
