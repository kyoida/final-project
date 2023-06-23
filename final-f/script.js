// // 1st animation
// // const button = document.getElementById("myButton");
// // const isRed = false;

// // button.addEventListener("click", () => {
// //   if (isRed) {
// //     button.style.backgroundColor = "blue";
// //     isRed = false;
// //   } else {
// //     button.style.backgroundColor = "red";
// //     isRed = true;
// //   }
// // });


// //fade in
// const element = document.querySelector('.main');
// element.style.opacity = 0;

// const fadeIn = () => {
//   let opacity = 0;
//   const interval = setInterval(() => {
//     if (opacity < 1) {
//       opacity += 0.1;
//       element.style.opacity = opacity;
//     } else {
//       clearInterval(interval);
//     }
//   }, 100);
// };

// fadeIn();


// //slide in 
// const slideIn = () => {
//   const element = document.querySelector('.main-info');
//   const startingPosition = -1000;
//   let currentPosition = startingPosition;

//   const interval = setInterval(() => {
//     if (currentPosition < 0) {
//       currentPosition += 10;
//       element.style.transform = `translateX(${currentPosition}px)`;
//     } else {
//       clearInterval(interval);
//     }
//   }, 10);
// };

// slideIn();

// //scale animation
// const scaleAnimation = () => {
//   const element = document.querySelector('.main-second');
//   let scale = 0;

//   const interval = setInterval(() => {
//     if (scale < 1) {
//       scale += 0.05;
//       element.style.transform = `scale(${scale})`;
//     } else {
//       clearInterval(interval);
//     }
//   }, 50);
// };

// scaleAnimation();


// //rotate animation

// const rotateAnimation = () => {
//   const element = document.querySelector('.main-third');
//   let rotation = 0;

//   const interval = setInterval(() => {
//     if (rotation < 360) {
//       rotation += 5;
//       element.style.transform = `rotate(${rotation}deg)`;
//     } else {
//       clearInterval(interval);
//     }
//   }, 20);
// };

// rotateAnimation();



// //color change animation
// const colorChange = () => {
//   const element = document.querySelector('.main-first');
//   const colors = ['red', 'green', 'blue'];
//   let colorIndex = 0;

//   const interval = setInterval(() => {
//     element.style.color = colors[colorIndex];
//     colorIndex = (colorIndex + 1) % colors.length;
//   }, 1000);
// };

// colorChange();


// //bounsing animation
// const bounceAnimation = () => {
//   const element = document.querySelector('.main-info');
//   let position = 0;
//   let direction = 1;

//   const interval = setInterval(() => {
//     position += direction * 5;
//     element.style.transform = `translateY(${position}px)`;

//     if (position >= 100 || position <= -100) {
//       direction *= -1;
//     }
//   }, 100);
// };

// bounceAnimation();


// //type writer animation
// const typewriterAnimation = () => {
//   const element = document.querySelector('.main-secondary h4');
//   const text = element.innerText;
//   element.innerText = '';

//   let index = 0;
//   const interval = setInterval(() => {
//     element.innerText += text[index];
//     index++;

//     if (index === text.length) {
//       clearInterval(interval);
//     }
//   }, 100);
// };

// typewriterAnimation();


// //hover animation

// const hoverAnimation = () => {
//   const element = document.querySelector('.header__logo');
//   element.addEventListener('mouseenter', () => {
//     element.classList.add('hovered');
//   });

//   element.addEventListener('mouseleave', () => {
//     element.classList.remove('hovered');
//   });
// };

// hoverAnimation();

//image slider animation

// const imageSlider = () => {
//   const images = [
//     'images\p-1.jpg',
//     'images\p-2.jpg',
//     'image3.jpg',
//   ];
//   let currentImageIndex = 0;

//   const imageElement = document.querySelector('.slider-image');

//   const changeImage = () => {
//     imageElement.src = images[currentImageIndex];
//     currentImageIndex = (currentImageIndex + 1) % images.length;
//   };

//   setInterval(changeImage, 2000);
// };

// imageSlider();







// // Carousel auto-scrolling
// function carouselScroll() {
//     const carouselInner = document.querySelector('.carousel-inner');
//     const carouselItems = document.querySelectorAll('.carousel-item');
  
//     let currentIndex = 0;
//     const totalItems = carouselItems.length;
  
//     setInterval(() => {
//       currentIndex = (currentIndex + 1) % totalItems;
//       carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }, 3000);
//   }
  
//   // Call the carouselScroll function after the document is loaded
//   document.addEventListener('DOMContentLoaded', carouselScroll);
  



        // JavaScript code for smooth scrolling navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
