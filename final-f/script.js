 //   Scrolling animation
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

//   fade in
const element = document.querySelector('.main');
element.style.opacity = 0;

const fadeIn = () => {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 100);
};
fadeIn();

//  slide in 
const slideIn = () => {
  const element = document.querySelector('.main-info');
  const startingPosition = -1000;
  let currentPosition = startingPosition;

  const interval = setInterval(() => {
    if (currentPosition < 0) {
      currentPosition += 10;
      element.style.transform = `translateX(${currentPosition}px)`;
    } else {
      clearInterval(interval);
    }
  }, 10);
};

slideIn();

//  scale animation
const scaleAnimation = () => {
  const element = document.querySelector('.main-second');
  let scale = 0;

  const interval = setInterval(() => {
    if (scale < 1) {
      scale += 0.05;
      element.style.transform = `scale(${scale})`;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

scaleAnimation();



//   bounsing animation
const bounceAnimation = () => {
  const element = document.querySelector('.main-info');
  let position = 0;
  let direction = 1;

  const interval = setInterval(() => {
    position += direction * 5;
    element.style.transform = `translateY(${position}px)`;

    if (position >= 100 || position <= -100) {
      direction *= -1;
    }
  }, 100);
};
bounceAnimation();


// type writer animation
const typewriterAnimation = () => {
  const element = document.querySelector('.main-secondary h4');
  const text = element.innerText;
  element.innerText = '';

  let index = 0;
  const interval = setInterval(() => {
    element.innerText += text[index];
    index++;

    if (index === text.length) {
      clearInterval(interval);
    }
  }, 100);
};
typewriterAnimation();

//  Carousel auto-scrolling
function carouselScroll() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let currentIndex = 0;
    const totalItems = carouselItems.length;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
  }
  document.addEventListener('DOMContentLoaded', carouselScroll);
  

  //  slide in from left 

  const imgElement2 = document.querySelector('.middle img');

  function slideInFromRight() {
    let position = 100;
    imgElement2.style.transform = `translateX(${position}%)`;
  
    const interval = setInterval(() => {
      if (position <= 0) {
        clearInterval(interval);
      }
      position -= 10;
      imgElement2.style.transform = `translateX(${position}%)`;
    }, 100);
  }
  
  imgElement2.addEventListener('mouseenter', slideInFromRight);

  
//  rotate the butt

  const imgElement = document.querySelector('.tour img');

  function rotateForever() {
    let rotation = 0;
  
    function animate() {
      rotation = (rotation + 1) % 360;
  
      imgElement.style.transform = `rotate(${rotation}deg)`;
  
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  }
  
  rotateForever();
  

  //  carousel again, but with another animation
  const carouselImages = document.querySelectorAll('.carousel-item img');

  function zoomInAnimation() {
    carouselImages.forEach(image => {
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.2)';
      });
  
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
      });
    });
  }
  
  zoomInAnimation();
  
  
// shake the word
  const tourBackText = document.querySelector('.tour-back');

function shakeAnimation() {
  tourBackText.addEventListener('mouseenter', () => {
    tourBackText.style.transform = 'rotate(-5deg)';
  });

  tourBackText.addEventListener('mouseleave', () => {
    tourBackText.style.transform = 'rotate(5deg)';
  });
}

shakeAnimation();

// sliding 2 img parallel
const image2 = document.querySelector('#events img');
image2.style.transform = 'translateX(100%)';

const slideIn1 = (element) => {
  let position = -100;
  const interval = setInterval(() => {
    if (position < 0) {
      position += 1;
      element.style.transform = `translateX(${position}%)`;
    } else {
      clearInterval(interval);
    }
  }, 10); 
};
slideIn1(image2);


//  fade in 2 img
const image4 = document.querySelector('#events img');
image4.style.opacity = '0';

const fadeIn1 = (element) => {
  let opacity = 0;
  const interval = setInterval(() => {
    if (opacity < 1) {
      opacity += 0.01; 
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 10);
};
fadeIn1(image4);




// changing color on hover
const write = document.querySelectorAll('.footer-info a');

function changeColorOnHover() {
  write.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.color = 'red';
    });

    icon.addEventListener('mouseleave', () => {
      icon.style.color = '#eae7af';
    });
  });
}

changeColorOnHover();


//  fade in of the footer logo
const footerLogo = document.querySelector('.footer-logo');
footerLogo.style.opacity = '0';

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const footerPosition = document.querySelector('.footer').offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition + windowHeight >= footerPosition) {
    footerLogo.style.transition = 'opacity 1s';
    footerLogo.style.opacity = '1';
  }
});


// scrolling rotating other img 
const learnImage = document.querySelector('.other');
learnImage.style.transform = 'rotate(0deg)';

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const learnPosition = document.querySelector('.other').offsetTop;
  const windowHeight = window.innerHeight;

  if (scrollPosition + windowHeight >= learnPosition) {
    const rotation = (scrollPosition + windowHeight - learnPosition) / windowHeight * 360;
    learnImage.style.transform = `rotate(${rotation}deg)`;
  }
});


