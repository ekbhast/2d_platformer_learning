'use strict'

//variable
const body = document.querySelector('body');
const heroSprite = document.createElement('img');
const heroDiv = document.createElement('div');
let rightPosition = 0;

heroSprite.src = '../assets/hero-sprite.png';
heroSprite.classList.add('heroSprite');

heroDiv.classList.add('heroDiv');

body.append(heroDiv);
heroDiv.append(heroSprite);

//functions

// movement hero
function movementLeft (){
    rightPosition = rightPosition + 1;

    if (rightPosition > 5) {
        rightPosition = 0;
    }

    heroSprite.style.left = `-${rightPosition*288}px`;
    // console.log('Кнопка влево');
}

// event keyboard
document.addEventListener('keydown',(KeyboardEvent) => {
    if (KeyboardEvent.key === 'ArrowRight') {
        movementLeft();
    }
});

//event handler
