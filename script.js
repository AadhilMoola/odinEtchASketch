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
    //creates grid in a square
    for(let i=0; i<size*size; i++){
        let grid = document.createElement('div')
        grid.classList.add('grid')
        container_div.appendChild(grid)
    }
    let grid_div = document.querySelectorAll('.grid')
    //adds event that changes color when mouse passes over
for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(){
        grid_div[i].style.cssText = 'background-color:red'
    })
}
container_div.style.cssText = `grid-template-columns: repeat(${size}, 1fr);`
}

//button that creates a grid with a different size
     gridSize_button.addEventListener('click', function gridCreateButton(){
      size = prompt('What size Grid?')
      if(size>100||size<0){
        alert('Please pick a number between 1 and 100')
        gridCreateButton()
      }else{
      let currentGrid = document.querySelectorAll('.grid')
      console.log(currentGrid.length)
      for(let i=0; i<currentGrid.length; i++){
        container_div.removeChild(document.querySelector('.grid'))
        }
        gridCreate(size)
    }
      
})



gridCreate(16)


