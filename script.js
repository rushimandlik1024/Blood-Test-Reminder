document.addEventListener("DOMContentLoaded", function () {
    const testDateInput = document.getElementById("testDate");
    const setReminderButton = document.getElementById("setReminder");
    const reminderMessage = document.getElementById("reminderMessage");

    setReminderButton.addEventListener("click", function () {
        const selectedDate = testDateInput.value;
        const today = new Date();
        const selectedDateObj = new Date(selectedDate);

        if (selectedDate === "") {
            reminderMessage.textContent = "Please select a date for your blood test.";
        } else if (selectedDateObj < today) {
            reminderMessage.textContent = "Selected date has already passed. Please select a future date.";
        } else {
            const daysUntilTest = Math.ceil((selectedDateObj - today) / (1000 * 60 * 60 * 24));
            reminderMessage.textContent = `Your blood test is scheduled in ${daysUntilTest} days on ${selectedDate}.`;
        }
    });
});
