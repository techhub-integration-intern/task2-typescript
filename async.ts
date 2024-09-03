const sudokuAPI = 'https://sudoku-game-and-api.netlify.app/api/sudoku'

async function getSudoku(id: number){
    let sudokuData = await fetch(sudokuAPI)
    console.log(id,sudokuData)
    return sudokuData
}


for (let _=0;_<10;_++){
    getSudoku(_)
}