let use24HourFormat = true;

export function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    if (!use24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, '0');
        const digitalClockElement = document.getElementById('digital-clock');
        digitalClockElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
    } else {
        hours = hours.toString().padStart(2, '0');
        const digitalClockElement = document.getElementById('digital-clock');
        digitalClockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

export function toggleTimeFormat() {
    use24HourFormat = !use24HourFormat;
    updateDigitalClock();
}