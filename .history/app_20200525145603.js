document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startBtn = document.querySelector('.start')

    const width = 10
    let currentIndex = 0 //so first div in the grid
    let appleIndex = 0 //also first div
    let currentSnake = [2,1,0] //3rd div in the grid being 2, the head and 0 being the tail
    let direction = 1
    let score = 0
    let speed = 0.9
    let intervalTime = 0
    let interval = 0

    //starts and restarts the game
    function startGame() {
        currentSnake.forEach(index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        clearInterval(interval)
        score = 0
        randomApple()
        direction = 1
        scoreDisplay.innerText = score
        intervalTime = 1000
        currentSnake = [2,1,0]
        currentIndex = 0
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval(moveOutcomes, intervalTime)
    }

    //deals with ALL the outcomes of the snake
    function moveOutcomes() {
      
        //if snake hits border or itself
        if (
            (currentSnake[0] + width >= (width * width) && direction === width) || //if snake hits bottom
            (currentSnake[0] % width -1 && direction === 1) || //if snake hits right wall
            (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
            (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
            squares[currentSnake[0] + direction].classList.contains('snake') //if snake hits itself
        ) {
            return clearInterval(interval)
        }

        const tail = currentSnake.pop() //removes last item in the array and shows it
        squares[tail].classList.remove('snake') //removes snake class from the tail
        currentSnake.unshift(currentSnake[0] + direction)

        //deals with snake getting the apple
        if(squares[currentSnake[0]].classList.contains('apple')) {
            squares[currentSnake[0]].classList.remove('apple')
            squares[tail].classList.add('snake')
            currentSnake.push(tail)
            randomApple()
            score++f
            
        }
    }
})