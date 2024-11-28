const cubes = Array.from(document.querySelectorAll('.grid div'));
const btn = document.getElementById('btn');
const btnDelete = document.getElementById('delete');

// cubes.forEach((element, index) => {
//     element.innerText = index;
// });

const cubeShape = [4, 5, 14, 15];
const lineShape = [3, 4, 5, 6];
const zShape = [4, 14, 15, 25];
const lShape = [5, 15, 14, 13];
const tShape = [5, 14, 15, 16];

const tetrisShapes = [cubeShape, lineShape, zShape, lShape, tShape];





const randomShape = Math.floor(Math.random() * tetrisShapes.length);

let currentShape = tetrisShapes[randomShape];




document.addEventListener('keydown', (event) => {
    // Check if the key released is the left arrow key
    console.log(event.code)
    if (event.code === 'ArrowLeft') {
        left();
        // Add your loglic here
    }
    if (event.code === 'ArrowRight') {
        right();
        // Add your logic here
    }
    if (event.code === 'ArrowUp') {

    }
    if (event.code === 'ArrowDown') {
        down();
    }
});



const draw = () => {

    currentShape.forEach((index) => {

        cubes[index].classList.add('fill');
    })

}
draw();
const erase = () => {
    currentShape.forEach((index) => {
        cubes[index].classList.remove('fill');
    })
}

const down = () => {

    erase();
    if (currentShape.some(val => cubes[val + 10].classList.contains('freeze'))) {
        freeze()
    }
    currentShape.forEach((value, index) => {
        currentShape[index] = value + 10;
    });
    draw();
}

const left = () => {
    erase();

    if (currentShape.some(val => val % 10 === 0)) {
        currentShape.forEach((value, index) => {
            currentShape[index] = value
        })


    } else {
        currentShape.forEach((value, index) => {
            currentShape[index] = value - 1;
        })
    }

    draw()
}



const right = () => {
    erase();
    if (currentShape.some(val => val % 10 === 9)) {
        currentShape.forEach((value, index) => {
            currentShape[index] = value;
        })


    } else {
        currentShape.forEach((value, index) => {
            currentShape[index] = value + 1;
        })
    }

    draw()
}
const freeze = () => {

    currentShape.forEach((value, index) => {
        console.log(value)
        cubes[currentShape[index]].classList.add('freeze');
        currentShape[index] -= 10;

    });
  
    currentShape = [4, 5, 14, 15];

};


const interval = setInterval(() => { 
    console.log('something')
    down() 

}, 1000)





