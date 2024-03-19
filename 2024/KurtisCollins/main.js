//Beginning Of Button Code For Main Image Slider
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const imageWrapper = document.querySelector('.image-wrapper');
const images = document.querySelectorAll('.image-wrapper img');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImagePosition();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImagePosition();
    }
});

function updateImagePosition() {
    const imageWidth = images[0].offsetWidth;
    const newPosition = -currentIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${newPosition}px)`;
}
//End Of Button Code For Main Slider

//Beginning Of Countdown Code
// Target date for the countdown (June 7, 2024, at 6 PM)
const targetDate = new Date('March 19, 2024 12:50:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'Completed';
    } else {
        const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownHtml = '';
        if (weeks > 0) {
            countdownHtml += `<div>${weeks < 10 ? '0' + weeks : weeks} weeks</div>`;
        }
        if (days > 0) {
            countdownHtml += `<div>${days < 10 ? '0' + days : days} days</div>`;
        }
        if (weeks > 0 || days > 0) {
            countdownHtml += `<div>${hours < 10 ? '0' + hours : hours} hours</div>`;
        }
        if (weeks > 0 || days > 0 || hours > 0) {
            countdownHtml += `<div>${minutes < 10 ? '0' + minutes : minutes} minutes</div>`;
        }
        countdownHtml += `<div>${seconds < 10 ? '0' + seconds : seconds} seconds</div>`;

        document.getElementById('countdown').innerHTML = countdownHtml;
    }
}

