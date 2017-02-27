export var changeCell = (id,symbol)=>{
  return {
    type:'CHANGE_CELL',
    id,
    symbol
  }
}

export var played = (currentPlayerSymbol)=>{
  return {
    type: 'PLAYED',
    currentPlayerSymbol
  }
}
