// let height = 3000;
// let border = 15;
// const circle = document.getElementById('circle');
// for (i = 0; i < 15; i++) {
//     console.log('tarik')
//     let newHeight = height - 200;
//     let newBorder = border - 1;
//     border = newBorder;
//     height = newHeight;
//     circle.innerHTML += `<div style="border: ${newBorder}px solid white;height: ${newHeight}px; aspect-ratio: 1; border-radius: 50%; position:absolute; background: linear-gradient(90deg, #003f5b, #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913);

//         }"></div>`;
// };

const spiral = document.getElementById('spiral');

//Initial height 
let height = 1;
//Number of elements
const elements = 2000;
//The value which should be added for transform from the original 
let dontKnow = 0;


//Loop through the elements which should be displayed and adds the div, and the height and the distance is increased by every iterration
for (i = 0; i < elements; i++) {
    spiral.innerHTML += `<div style='height: ${height}px; aspect-ratio: 10; border:1px solid white;background: linear-gradient(90deg, #003f5b, #2b4b7d, #5f5195, #98509d, #cc4c91, #f25375, #ff6f4e, #ff9913); position:absolute; transform: rotate(${i }deg) translateX(${i + dontKnow }px'></div>`;
    height += 0.05;
    dontKnow += 2;
}