function updateClock() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeString = now.toLocaleTimeString([], options);
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately