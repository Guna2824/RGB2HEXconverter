import React from 'react'

function RangeCalculate(arr) {
    var max = Math.max(...arr)
    var index = arr.indexOf(max)
    
    let arr1 = [`rgb(${arr[0]},${arr[1]},${arr[2]})`]
    let r = arr[0];
    let g = arr[1];
    let b = arr[2];
    
    for (let i = arr[index]; i > 0; i--){
      if(r > 0){r -= 1};
      if(g > 0){g -= 1};
      if(b > 0){b -= 1};
      arr1.push(`rgb(${r},${g},${b})`)
    }
    
      return arr1;
}

export default RangeCalculate