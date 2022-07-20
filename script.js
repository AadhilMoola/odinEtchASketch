let header_div = document.querySelector('#header')
let body_div = document.querySelector('#bodyDiv')
let selectors_div = document.querySelector('#selectors')
let gridSize_button = document.querySelector('#gridSizeButton')
let black_button = document.querySelector('#blackButton')
let rainbow_button = document.querySelector('#rainbowButton')
let shade_button = document.querySelector('#shadeButton')
let erase_button = document.querySelector('#eraseButton')
let clear_button = document.querySelector('#clearButton')
let container_div = document.querySelector('#gridContainer')


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
        grid_div[i].style.cssText = 'background-color:rgb(0,0,0)'
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
      for(let i=0; i<currentGrid.length; i++){
        container_div.removeChild(document.querySelector('.grid'))
        }
        gridCreate(size)
    }
      
})


//rainbow button
rainbow_button.addEventListener('click', function(){
    let grid_div = document.querySelectorAll('.grid')
    for(let i=0; i<grid_div.length; i++){
        let r = Math.random()*255
        let g = Math.random()*255
        let b = Math.random()*255

        grid_div[i].addEventListener('mouseenter',function(){
            grid_div[i].style.cssText = `background-color:rgb(${r}, ${g}, ${b})`
        })}
})


//Clear Grid Button
clear_button.addEventListener('click', function(){
    let currentGrid = document.querySelectorAll('.grid')
    for(let i=0; i<currentGrid.length; i++){
        currentGrid[i].style.cssText = 'background-color:rgb(255,255,255)'
    }

})


//Erase Button
erase_button.addEventListener('click',function(){
    let grid_div = document.querySelectorAll('.grid')
for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(){
        grid_div[i].style.cssText = 'background-color:rgb(255,255,255)'
    })
}
})

//Shade Button
/* shade_button.addEventListener('click',function(){
    let grid_div = document.querySelectorAll('.grid')
    let opacity = 0
for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(e){
        opacity+=.1;
        // next line I got off the internet
        const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number);
        const RGBArray = toRGBArray(e.target.style.backgroundColor);
        grid_div[i].style.cssText = `background-color: rgba(${RGBArray[0]},${RGBArray[1]},${RGBArray[2]},${opacity+.1})`;
        console.log(e.target.style.backgroundColor)
    })
}
}) */

//black button
black_button.addEventListener('click',function(){
    let grid_div = document.querySelectorAll('.grid')
for(let i=0; i<grid_div.length; i++){
    grid_div[i].addEventListener('mouseenter',function(){
        grid_div[i].style.cssText = 'background-color:rgb(0,0,0)'
    })
}
})



gridCreate(16)


