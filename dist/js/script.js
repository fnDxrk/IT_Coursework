document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const dotsContainer = document.getElementById('slider-dots');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slider__single');
        const dots = document.querySelectorAll('.slider-dot');

        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        dots.forEach((dot, dotIndex) => {
            dot.style.backgroundColor = slides[dotIndex].getAttribute('data-color');

            if (dotIndex === index) {
                dot.style.width = '40px';  
                dot.style.height = '40px'; 
            } else {
                dot.style.width = '30px';
                dot.style.height = '30px';
            }
        });

        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].style.display = 'block';

        dots[currentSlide].style.width = '40px';
        dots[currentSlide].style.height = '40px';
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
    }

    function createDots() {
        const slides = document.querySelectorAll('.slider__single');
        slides.forEach((slide, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            dot.style.backgroundColor = slide.getAttribute('data-color');
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer.appendChild(dot);
        });
    }

    createDots();
    showSlide(currentSlide);

    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.list a');

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateLinkColors() {
        var found = false;
        links.forEach(function (link) {
            if (!found && isElementInViewport(document.querySelector(link.getAttribute('href')))) {
                link.classList.add('clicked');
                found = true;
            } else {
                link.classList.remove('clicked');
            }
        });
    }

    window.addEventListener('scroll', function () {
        updateLinkColors();
    });

    window.addEventListener('load', function () {
        updateLinkColors();
    });

    window.addEventListener('resize', function () {
        updateLinkColors();
    });

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            links.forEach(function (otherLink) {
                otherLink.classList.remove('clicked');
            });
            link.classList.add('clicked');

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.scrollY;
                const paddingTop = 60;

                window.scrollTo({
                    top: offset - paddingTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = smoothLink.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offset = targetElement.getBoundingClientRect().top + window.scrollY;
                const paddingTop = 60;

                window.scrollTo({
                    top: offset - paddingTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    document.querySelector('.section-home__button').addEventListener('click', function() {
        document.getElementById('formOverlay').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

});

function closeForm() {
    document.getElementById('formOverlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('click', function(event) {
    var formOverlay = document.getElementById('formWindow');
    
    if (!formOverlay.contains(event.target) && event.target !== document.querySelector('.section-home__button')) {
        closeForm();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var currentValue = 75;
    var valueElement = document.getElementById('value');

    var intervalId = setInterval(function() {
        currentValue--;
        valueElement.textContent = currentValue + "%";

        if (currentValue === 0) {
            clearInterval(intervalId);
        }
    }, 1000);
});

