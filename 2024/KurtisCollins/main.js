// Beginning of SLider JS
let slider = document.querySelector('.slider');
let wrapper = document.querySelector('.wrapper');
let next = document.querySelector('.arrow-next');
let prev = document.querySelector('.arrow-prev');
let item = document.querySelectorAll('.item');
let currdeg  = 0;
let active = 0;

next.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg - 120;

    if (active === item.length - 1) {
        active = 0;
    } else {
        active++;
    }

    toggle();
});

prev.addEventListener('click', () => {
    slider.classList.toggle('zoom');

    currdeg = currdeg + 120;

    if (active === 0) {
        active = item.length - 1;
    } else {
        active--;
    }

    toggle();
});

let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('active');
        }

        item[active].classList.add('active')
        wrapper.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);

    setTimeout(() => {
        slider.classList.toggle('zoom');
    }, 1900);
}
//End of Slider JS
// Beginning Of Countdown Code
// Define the target date for the countdown (June 7, 2024, at 6 PM)
const targetDate = new Date('June 7, 2024 18:00:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Function to update the countdown timer
function updateCountdown() {
    const now = new Date().getTime(); // Get the current time
    const distance = targetDate - now; // Calculate the distance to the target date

    if (distance <= 0) {
        // If the target date has passed, clear the countdown interval and display "Completed"
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Completed';
    } else {
        // Calculate the remaining time in weeks, days, hours, minutes, and seconds
        const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Build the HTML for the countdown timer
        let countdownHtml = '';
        if (weeks >= 1) {
            countdownHtml += `<div>${weeks < 10 ? '0' + weeks : weeks} weeks</div>`;
        }
        if (days >= 1 || weeks >= 1) {
            countdownHtml += `<div>${days < 10 ? '0' + days : days} days</div>`;
        }
        if (hours >= 1 || days >= 1 || weeks >= 1) {
            countdownHtml += `<div>${hours < 10 ? '0' + hours : hours} hours</div>`;
        }
        if (minutes >= 1 || hours >= 1 || days >= 1 || weeks >= 1) {
            countdownHtml += `<div>${minutes < 10 ? '0' + minutes : minutes} minutes</div>`;
        }
        countdownHtml += `<div>${seconds < 10 ? '0' + seconds : seconds} seconds</div>`;

        // Display the countdown timer in the HTML element with the id 'countdown'
        document.getElementById('countdown').innerHTML = countdownHtml;
    }
}
// End Of Countdown Code
