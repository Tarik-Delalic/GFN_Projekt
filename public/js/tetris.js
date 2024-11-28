const cubes = Array.from(document.querySelectorAll('.cube'));
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

document.addEventListener('keyup', (event) => {
    // Check if the key released is the left arrow key
    console.log(event.code)
    if (event.code === 'ArrowLeft') {
        erase()
        // Add your loglic here
    }
    if (event.code === 'ArrowRight') {

        // Add your logic here
    }
    if (event.code === 'ArrowUp') {

    }
    if (event.code === 'ArrowDown') {
        down();
    }
});




const randomShape = Math.floor(Math.random() * tetrisShapes.length);

const currentShape = tetrisShapes[randomShape];


const draw = () => {

    currentShape.forEach((index) => {

        cubes[index].classList.add('fill');
    })

}
const erase = () => {
    currentShape.forEach((index) => {
        cubes[index].classList.remove('fill');
    })
}

const down = () => {
    currentShape.forEach(index => {
        console.log(cubeShape[1])
      
       
    })
}
draw();

