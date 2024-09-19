'use strict'
const body = document.querySelector('body');
// let rightPosition = 5;
// let heroPostition = 0;
// let interval = null;
// let direction = null;

const character = {
    sprite: '../assets/hero-sprite.png',
    characterPosition : 0,
    animationFrame: 5,
    animationIntervalMovement : null,
    direction: null,


    //render character
    renderCharacter(){
        const heroSprite = document.createElement('img');
              heroSprite.src = this.sprite;
              heroSprite.classList.add('hero-sprite');

        const heroDiv = document.createElement('div');
              heroDiv.classList.add('hero-div');
              heroDiv.classList.add('hero-div');

        body.append(heroDiv);
        heroDiv.append(heroSprite);
    },

    //movement character
    movement (direction){
        rightPosition = rightPosition - 1;
        
        if (rightPosition < 1 ) {
            rightPosition = 5;
        }

        heroSprite.style.left = `-${rightPosition*288}px`;
        heroPostition = heroPostition + 20;
        heroDiv.style.left = `${heroPostition}px`
        console.log(heroPostition);
    }

}

//functions



character.renderCharacter();

// event keyboard
document.addEventListener('keydown',(event) => {
    if (event.repeat != true){
        switch (event){
            case 'ArrowRight':
                direction = right;
                break;
            
            case 'ArrowLeft':
                direction = left;
            break;
        }
    movement();
    interval = setInterval(movement, 130);
}

});

document.addEventListener('keyup', (event) =>{
    switch (event){
        case 'ArrowRight':
            direction = null;
            break;
        
        case 'ArrowLeft':
            direction = null;
        break;
    }
    clearInterval(interval);
})


//     if (event.key === 'ArrowRight' && event.repeat == false) {
//         interval = setInterval(movementLeft, 130);
//     }
// });

// document.addEventListener('keyup',(event) => {
//     if (event.key === 'ArrowRight') {
//         clearInterval(interval);
//     }
// });



//event handler
