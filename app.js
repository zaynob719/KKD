
const carouselSlide = document.querySelector ('.carousel-slide');
const carouselImage = document.querySelector ('.carousel-slide img');
const prevBtn = document.querySelector ('#prevBtn');
const nextBtn = document.querySelector ('#nextBtn');

let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform= 'translateX( ' + (-size * counter) + 'px)';