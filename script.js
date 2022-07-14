let header_div = document.querySelector('#header')
let container_div = document.querySelector('#container')



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
}

gridCreate(10)

let grid_div = document.querySelectorAll('.grid')
console.log(grid_div)

for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(e){
        grid_div[i].style.cssText = 'background-color:red'
    })
}
