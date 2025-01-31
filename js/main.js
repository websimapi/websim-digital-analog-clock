import { updateDigitalClock } from './digital-clock.js';
import { updateAnalogClock, renderClockMarkers } from './analog-clock.js';

function initializeClock() {
    // Render clock markers
    renderClockMarkers();

    // Update clocks immediately
    updateDigitalClock();
    updateAnalogClock();

    // Set up interval to update clocks every second
    setInterval(() => {
        updateDigitalClock();
        updateAnalogClock();
    }, 1000);
}

// Initialize the clock when the page loads
window.addEventListener('load', initializeClock);