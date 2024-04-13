//let matrix = shuffleMatrix()
//trampa :)
  let matrix = [
      ['1', '2', '3' ],
      ['4', '5', '6' ],
      ['7', '', '8' ],
 ]
let board = document.querySelector('.board');
//tiempo 
// let timerElement = document.getElementById('timer');
// let countdown;

drawTokens()
addEventListeners()
//startTimer(60);
//tiempo
// function startTimer(seconds) {
//     let remainingTime = seconds;
//     updateTimerDisplay(remainingTime);

//     countdown = setInterval(() => {
//         remainingTime--;
//         updateTimerDisplay(remainingTime);

//         if (remainingTime === 0) {
//             clearInterval(countdown);
//             alert("¡Se acabó el tiempo!");
//             // Aquí puedes agregar lógica adicional cuando el tiempo se agote
//         }
//     }, 1000);
// }

// function updateTimerDisplay(seconds) {
//     timerElement.textContent = `Tiempo restante: ${seconds} segundos`;
// }
//aqui termina el codigo de el tiempo 
function drawTokens(){
    board.innerHTML = '';
    matrix.forEach(row => row.forEach(element => 
    {
        if(element == ''){
            board.innerHTML += `<div class = 'empty'>
            ${element} </div>`
        }
        else{
            board.innerHTML += `<div class = 'token'>
            ${element} </div>`
        }
    }))
}

function addEventListeners(){
    let tokens = document.querySelectorAll('.token')
    tokens.forEach(token => 
        token.addEventListener('click', ()=>{

            let actualpociton = searchposition(token.innerText)
            let emptyPosition = searchposition('')
            let movement = canItMove(actualpociton, 
                emptyPosition)

                if (movement !== false ){
                    updateMatrix( token.innerText, 
                        actualpociton, emptyPosition)
                        
                       let result = compareMatrix()
                       if(result == true){
                        confetti({
                            particleCount: 150,
                            spread: 180
                          });
                       }

                        drawTokens()
                        addEventListeners() 
                    }
        }))
}

function searchposition(element){

    let rowIndex = 0;
    let columIndex = 0;

    matrix.forEach((row, index) =>{
       let rowElement = row.findIndex(item => 
         item == element)
         if(rowElement !== -1){
            rowIndex = index
            columIndex = rowElement
         }
    })
    return [rowIndex, columIndex]
}

function canItMove(actualpociton, 
    emptyPosition){

    if (actualpociton[1]== emptyPosition[1]){

        if(actualpociton[0] - emptyPosition[0] > 1 || 
            actualpociton[0] - emptyPosition[0]< -1){
                return false
            }
        // if (actualpociton[0] - emptyPosition[0] == -1 ){
        //     return 'down'
        // }
        // else if (actualpociton[0] - emptyPosition[0] == 1) {
        //     return 'up'
        // } 
        // else{
        //     return 'noMover'
        // }    
    }
    else if ( actualpociton[0] == emptyPosition[0]){
        
        if(actualpociton[1] - emptyPosition[1] > 1 || 
            actualpociton[1] - emptyPosition[1]< -1){
                return false 
            }
    //    if (actualpociton[1] - emptyPosition[1] == -1) {
    //        return'right'
    //     }
    //     else if (actualpociton[1] - emptyPosition[1] == 1) 
    //     {
    //        return 'left'
    //     }   
    //     else{
    //         return 'noMover'
    //     }
    } 
    else{
        return false
    }
}

function updateMatrix(element, actualpociton, 
    emptyPosition){
        matrix [actualpociton[0]] [actualpociton[1]] = ''
        matrix [emptyPosition[0]] [emptyPosition[1]] = element
        
    }

    function shuffleMatrix(){

        let shuffleMatrix = [
            [],
            [],
            []
        ]

      let array = ['1', '2', '3', '4', '5', '6', '7', '8', '']
      let shufleArray = array.sort(()=> Math.random()-0.5) 

    let column = 0;
    let row = 0;

      shufleArray.forEach(element => {
        shuffleMatrix [row].push(element)
        if (column < 2){
            column++
        }
        else{
            column = 0
            row ++
        }
      })
      return shuffleMatrix
    }

    function compareMatrix(){
        let counter = 0;
        let finalMatrix = [
            ['1', '2', '3' ],
            ['4', '5', '6' ],
            ['7', '8', '' ],
        ]

    matrix.forEach( (row, indexRow) => {
     row.forEach((element, indexColumn)=> {
    if(element == finalMatrix [indexRow][indexColumn])
       {
        counter++
       }
    })
    })
    //console.log(counter)
    if(counter == 9){
        return true 
    }
    else{
        return false
    }
}