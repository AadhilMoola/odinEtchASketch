let header_div = document.querySelector('#header')
let body_div = document.querySelector('#bodyDiv')
let selectors_div = document.querySelector('#selectors')
let gridSize_button = document.querySelector('#gridSizeButton')
let container_div = document.querySelector('#gridContainer')





/* This Does not work for creating a grid in the same footprint each time
function gridCreate(size){
 for(let i=0; i<size; i++){
    let containerRow = document.createElement('div')
    container_div.appendChild(containerRow)
    containerRow.classList.add('containerRow')
 for(let i=0; i<size; i++){
    let grid = document.createElement('div')
    grid.classList.add('grid')
    containerRow.appendChild(grid)
} 

}

} */


function gridCreate(size){
    for(let i=0; i<size*size; i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        container_div.appendChild(grid)
    }
}

let gridSize =prompt('What size Grid?') //gridSize_button.addEventListener('click', function(){
    //return (prompt('What size Grid?'))
//})
console.log(gridSize)

gridCreate(gridSize)

let grid_div = document.querySelectorAll('.grid')
for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(){
        grid_div[i].style.cssText = 'background-color:red'
    })
}
