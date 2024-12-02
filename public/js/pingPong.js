const grid = document.getElementById('grid');

for (let i = 0; i < 1250; i++) {
    grid.innerHTML += `<div class='cube'></div>`;
};

let cubes = Array.from(document.querySelectorAll('.grid div'));
let postionBall = 0;
let activeBall = cubes[postionBall].classList.add('ball');


document.addEventListener('keydown', (event) => {
    // Check if the key released is the left arrow key
    console.log(event.code)
    if (event.code === 'ArrowLeft') {
        erase()
        cubes[postionBall - 1].classList.add('ball');
        postionBall--;
    }
    if (event.code === 'ArrowRight') {

        erase();
        cubes[postionBall + 1].classList.add('ball');
        postionBall++;
    }
    if (event.code === 'ArrowUp') {
        erase();
        cubes[postionBall - 50].classList.add('ball');
        postionBall -= 50;
    }
    if (event.code === 'ArrowDown') {
        erase();
        cubes[postionBall + 50].classList.add('ball');
        postionBall += 50;
        
    }
});

const erase = () => {
    cubes[postionBall].classList.remove('ball')
};


