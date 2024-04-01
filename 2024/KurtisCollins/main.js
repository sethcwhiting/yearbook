//Beginning Of Button Code For Main Image Slider
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-section .carousel-item');
const numItems = items.length;
const carouselInner = document.querySelector('.carousel-section .carousel-inner');

function showSlide(index) {
  const offset = -index * 100 / numItems;
  carouselInner.style.transform = `translateX(${offset}%)`;
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numItems;
  showSlide(currentIndex);
}

function prevSlide() {
  const lastIndex = numItems - 1;
  
  if (currentIndex === 0) {
    // Move the first item to the last position
    const firstItem = items[0];
    const lastItem = items[lastIndex];
    carouselInner.appendChild(firstItem); // Append the first item to move it to the end
    currentIndex = lastIndex; // Update the currentIndex to point to the new last item
  } else {
    // Move the current item to the first position
    const currentItem = items[currentIndex];
    const firstItem = items[0];
    carouselInner.insertBefore(currentItem, firstItem); // Move the current item to the first position
    currentIndex = 0; // Update the currentIndex to point to the new first item
  }
  
  showSlide(currentIndex);
}



showSlide(0); // Start with the first slide


//End Of Button Code For Main Slider

//Beginning Of Countdown Code
// Target date for the countdown (June 7, 2024, at 6 PM)
const targetDate = new Date('June 7, 2024 18:00:00').getTime();

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

        document.getElementById('countdown').innerHTML = countdownHtml;
    }
}

