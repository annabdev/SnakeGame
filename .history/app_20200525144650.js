document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //so first div in the grid
    let appleIndex = 0 //also first div
    let currentSnake = [2,1,0] //3rd div in the grid being 2, the head and 0 being the tail
    let direction 
})