// Get the necessary DOM elements
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slider = document.querySelector('.slider');
const sliderList = slider.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');

// Move slider in the given direction
function moveSlider(direction) {
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
        // Move the first item to the end for 'next'
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else if (direction === 'prev') {
        // Move the last item to the beginning for 'prev'
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
    }

    // Remove animation class after it's done
    slider.addEventListener('animationend', () => {
        slider.classList.remove('next', 'prev');
    }, { once: true });
}

// Attach event listeners to buttons
nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));
