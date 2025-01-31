export function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

export function renderClockMarkers() {
    const hourNumbersContainer = document.querySelector('.hour-numbers');
    const tickMarksContainer = document.querySelector('.tick-marks');
    const clockRadius = 150;
    const numberRadius = 130;
    const centerX = 150;
    const centerY = 150;

    // Render hour numbers
    for (let i = 1; i <= 12; i++) {
        const angle = (i - 3) * (Math.PI / 6);
        const x = centerX + numberRadius * Math.cos(angle);
        const y = centerY + numberRadius * Math.sin(angle);

        const numberElement = document.createElement('div');
        numberElement.classList.add('hour-number');
        numberElement.textContent = i;
        numberElement.style.position = 'absolute';
        numberElement.style.left = `${x - 15}px`;
        numberElement.style.top = `${y - 15}px`;
        
        hourNumbersContainer.appendChild(numberElement);
    }

    // Render tick marks
    for (let i = 0; i < 12; i++) {
        const angle = i * (Math.PI / 6);
        const startRadius = 140;
        const endRadius = 150;

        const startX = centerX + startRadius * Math.cos(angle - Math.PI / 2);
        const startY = centerY + startRadius * Math.sin(angle - Math.PI / 2);
        const endX = centerX + endRadius * Math.cos(angle - Math.PI / 2);
        const endY = centerY + endRadius * Math.sin(angle - Math.PI / 2);

        const tickMark = document.createElement('div');
        tickMark.classList.add('tick-mark');
        tickMark.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
        tickMark.style.left = `${centerX}px`;
        tickMark.style.top = `${centerY}px`;

        tickMarksContainer.appendChild(tickMark);
    }
}