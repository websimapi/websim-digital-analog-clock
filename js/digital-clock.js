export function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Convert 0 to 12
    hours = hours.toString().padStart(2, '0');
    
    const digitalClockElement = document.getElementById('digital-clock');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    digitalClockElement.textContent = timeString;
    document.querySelector('.period-indicator').textContent = period;
}