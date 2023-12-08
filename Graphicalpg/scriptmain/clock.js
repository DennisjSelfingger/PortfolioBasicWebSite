// Update the clock hands based on the current time
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60; // Mod by 12 to get it in 12-hour format

    const secondDeg = (seconds * 6) + 90;
    const minuteDeg = (minutes * 6) + 90;
    const hourDeg = (hours * 30) + 90;

    document.getElementById('secondHand').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourDeg}deg)`;
}

// Position the hour numbers around the clock face
function positionHourNumbers() {
    const radius = 220;
    const center = { x: 250, y: 250 };

    document.querySelectorAll('.number').forEach(numberDiv => {
        const hour = parseInt(numberDiv.getAttribute('data-hour'));
        const angle = (hour - 3) * (Math.PI / 6); 
        const x = center.x + radius * Math.cos(angle) - 12;  // -12 to center the number horizontally
        const y = center.y + radius * Math.sin(angle) - 12;  // -12 to center the number vertically
        
        numberDiv.style.left = `${x}px`;
        numberDiv.style.top = `${y}px`;
        numberDiv.textContent = hour;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    positionHourNumbers();
    setInterval(updateClock, 1000); // Updates the clock every second
});


/*function calculateInvestment() {
    const A = parseFloat(document.getElementById('future-value').value);
    const r = parseFloat(document.getElementById('interest-rate').value) / 100;
    const n = parseFloat(document.getElementById('compounds').value);
    const t = parseFloat(document.getElementById('years').value);
    const P = A / (1 + r/n)**(n*t);
    const initialInvestment = Math.round(P);
    document.getElementById('investment-value').innerText = initialInvestment;
}

function calculateMooresLaw() {
    const initialValue = parseFloat(document.getElementById('initialValue').value);
    const startingYear = parseFloat(document.getElementById('startingYear').value);
    const endingYear = parseFloat(document.getElementById('endingYear').value);
    const timePeriod = endingYear - startingYear;
    const futureValue = initialValue * Math.pow(2, timePeriod/2);
    document.getElementById('future-value').innerText = futureValue.toFixed(2);
}

// 
*/