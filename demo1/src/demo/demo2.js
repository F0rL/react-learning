//写一个3*3的棋盘小游戏
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './demo2.css'

const Cell = function (props) {
  return  (
    <div className="cell" onClick={props.onClick}>
      {props.text}
    </div>
  )
}

const Chessboard = function() {
  const [cells, setCells] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])

  const [finish, setfinish] = useState(false)

  const [n, setN] = useState(0)
  const tell = (cells) => {
    for(let i = 0; i < 3; i++) {
      if(cells[i][0] === cells[i][1] && cells[i][1] === cells[i][2] && cells[i][0] !== null){
        console.log(cells[i][0] + '赢了')
        setfinish(true)
      }
    }
    //还有其它判断情况未写
  }
  const onClickCell = (row, col) => {
    console.log('cell')
    console.log('行'+ row)
    console.log('列'+ col)
    setN(n+1)
    cells[row][col] = n%2===0 ? 'X' : 'O'
    const copy = JSON.parse(JSON.stringify(cells))
    setCells(copy)
    tell(copy)
  }
  return (
    <div>
      <div>n: {n}</div>
      {cells.map((items, row) => <div className="row">
          {items.map((item, col) => <div className="col">
              <Cell text={item} onClick={() => onClickCell(row, col)}/>
            </div>)}
        </div>)}
        {finish && <div className="over">结束</div>}
    </div>
  )
}
ReactDOM.render(<div><Chessboard/></div>, document.getElementById('root'))