// Toggle display of the list
function disList() {
    const list = document.getElementById('myList');
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.classList.add('list');
    } else {
        list.classList.add('hidden');
        list.classList.remove('list');
        
    }
}
function disList2() {
    const list2 =document.getElementById('myList2');
    if (list2.classList.contains('hidden')) {
        list2.classList.remove('hidden');
        list2.classList.add('list');
    } else {
        list2.classList.add('hidden');
        list2.classList.remove('list');
        
    }
}

// Slide functionality
const slides = document.querySelectorAll('.slides section');
const totalSlides = slides.length;
let currentSlide = 0;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0; 
    } else if (index < 0) {
        currentSlide = totalSlides - 1; 
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    slides.forEach(slide => {
        slide.style.transform = `translateX(${offset}%)`; 
    });
}

document.getElementById('left').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.getElementById('right').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);





const listNav = document.getElementById('listNav');
const all = document.getElementById('all');

function getListNavRes() {
    listNav.style.display = 'block';
    all.style.display = 'none';
}

document.getElementById('close').addEventListener('click', ()=>{
    console.log('close function called'); 
    listNav.style.display = 'none';
    all.style.display = 'block';
}); 

/////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const slides1 = document.querySelector('.slide');
    const balls1 = document.querySelectorAll('.ball div');
    let currentIndex1 = 0;

    const slides2 = document.querySelector('.slide2');
    const balls2 = document.querySelectorAll('.ball2 div');
    let currentIndex2 = 0;

    function updateSlide(slide, balls, index) {
        const slidesToShow = 2; // Number of slides to show at a time
        const offset = -index * (100 / slidesToShow); // Calculate offset to show the correct slides
        slide.style.transform = `translateX(${offset}%)`;
        balls.forEach((ball, i) => {
            ball.classList.toggle('active', i === index);
        });
    }

    balls1.forEach((ball, index) => {
        ball.addEventListener('click', () => {
            currentIndex1 = index;
            updateSlide(slides1, balls1, currentIndex1);
        });
    });

    balls2.forEach((ball, index) => {
        ball.addEventListener('click', () => {
            currentIndex2 = index;
            updateSlide(slides2, balls2, currentIndex2);
        });
    });

    // Initialize
    updateSlide(slides1, balls1, currentIndex1);
    updateSlide(slides2, balls2, currentIndex2);
});







