
const a={

}


const tests=[
  [
    ["Set_Change","A","C",4]
    ["GET","A","C",4]
    ["Set_Change","A","C",4]
    ["DELETE","A","C",4]
    ["Set_Change","A","D",4]
    ["DELETE","E","X",4]
  ]
]

//  ========================
for (let i = 0; i < sequence.length-1; i++) {
  const elem1 = sequence[i];
  const elem2 = sequence[i+1];

  numberOfWrongNumber+=elem2-elem1>0?0:1
  
}

return numberOfWrongNumber<=1?true:false