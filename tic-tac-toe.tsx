import React, { useRef, useState } from 'react'


const App = () => {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [isNext,setIsNext] = useState(false)

  const getWinner = () =>{
    const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for(let combo of win){
      const[a,b,c] = combo
      if(board[a] == board[b] && board[b] == board[c] && board[c] == board[a]){
        return board[a]
      }
    }
  }

  const winner = getWinner()


  const handleClick = (idx) => {
    if(board[idx] || winner){
      return
    }
    const newBoard = [...board]
    newBoard[idx] = isNext ? "X" : "O";
    setBoard([...newBoard])
    setIsNext(!isNext)
  }
  
  return (
  <div>
    <div>
      <button onClick={()=>setBoard(Array(9).fill(null))}>Reset</button>
    </div>
  <div style={{display:"grid",gridTemplateColumns: 'repeat(3, 100px)', gridGap: '5px'}}>
    {
      board.map((cell,idx)=>(
        <div key={idx} style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'grey',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',
            color: 'white',
            cursor: 'pointer',
          }} onClick={()=>handleClick(idx)}>{cell}</div>
      ))
    }
  </div>
    <div>
      <span>winner:{winner}</span>
    </div>
  </div>
  )
}


export default App
