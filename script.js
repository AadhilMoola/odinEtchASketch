let header_div = document.querySelector('#header')
let container_div = document.querySelector('#container')

for(let i=0; i<16; i++){
    let containerRow = document.createElement('div')
    container_div.appendChild(containerRow)
    containerRow.classList.add('containerRow')
 for(let i=0; i<16; i++){
    let grid = document.createElement('div')
    grid.classList.add('grid')
    containerRow.appendChild(grid)
} 

}