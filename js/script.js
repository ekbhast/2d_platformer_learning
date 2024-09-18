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
document.addEventListener('keydown',(event) => {
    if (event.keyCode === 39) {
        if (rightPosition > 4){
            rightPosition = 0;
        } else {
            rightPosition = rightPosition + 1
        }
        
        heroSprite.style.left = `-${rightPosition*288}px`;
        console.log('Кнопка влево');
    }
});

//event handler
