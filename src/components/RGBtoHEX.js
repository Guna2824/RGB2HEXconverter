
function RGBtoHEX(rgb) {

  const rgbPattern = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
  var rgbValue = rgbPattern.test(rgb)

    if(rgbValue === false ){
      return (alert("Enter RGB value 0 - 255"),"#ffffff")
      
    }else{

        var match = rgb.match(/\d+/g).map(Number)
        var red = match[0]
        var green = match[1]
        var blue = match[2]
        
        //-----------h value-----------------//

        
        if(red === 0){
          var h = "00"
        }
        if(red%16 !== 0){
        var a = Math.floor(red/16)
        var b = Math.floor(red%16)
  
          if(a < 10){
            var h = a
          }else if(a === 10){
            var h = "A"
          }else if(a === 11){
            var h = "B"
          }else if(a === 12){
            var h = "C"
          }else if(a === 13){
            var h = "D"
          }else if(a === 14){
            var h = "E"
          }else if(a === 15){
            var h = "F"
          }
          
          if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var HH = h
          }else {
            var HH = h
          }
            
            if (b < 10){
              var h = b
            }else if(b === 10 ){
              var h = "A"
            }else if(b === 11){
              var h = "B"
            }else if(b === 12){
              var h = "C"
            }else if(b === 13){
              var h = "D"
            }else if(b === 14){
              var h = "E"
            }else if(b === 15){
              var h = "F"
            }
            if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var HHH = h
            }else{
              var HHH = h
            }
            var h = HH+""+HHH
        
        }else {
          var a = Math.round(red/16)
          var b = Math.round(red%16)
          if(a === 10){
            var h = "A"
          }else if(a === 11){
            var h = "B"
          }else if(a === 12){
            var h = "C"
          }else if(a === 13){
            var h = "D"
          }else if(a === 14){
            var h = "E"
          }else if(a === 15){
            var h = "F"
          }
          if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var h = h+""+b
          }else{
            var h = a+""+b
          }
        }
    // }
    //     //------------e value--------------------//

    //     if(green > 255){
    //         alert("Enter Green value 0 - 255")
    //     }else{
        if(green === 0){
          var e = "00"
        }
        if(green%16 !== 0){
        var a = Math.floor(green/16)
        var b = Math.floor(green%16)
        
          if(a < 10){
            var e = a
          }else if(a === 10){
            var e = "A"
          }else if(a === 11){
            var e = "B"
          }else if(a === 12){
            var e = "C"
          }else if(a === 13){
            var e = "D"
          }else if(a === 14){
            var e = "E"
          }else if(a === 15){
            var e = "F"
          }
          if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var EE = e
          }else {
            var EE = e
          }
        
            if(b < 10){
              var e = b
            }else if(b === 10 ){
              var e = "A"
            }else if(b === 11){
              var e = "B"
            }else if(b === 12){
              var e = "C"
            }else if(b === 13){
              var e = "D"
            }else if(b === 14){
              var e = "E"
            }else if(b === 15){
              var e = "F"
            }
            if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var EEE = e
            }else{
              var EEE = e
            }
            var e = EE+""+EEE
        }else {
          var a = Math.round(green/16)
          var b = Math.round(green%16)
          if(a === 10){
            var e = "A"
          }else if(a === 11){
            var e = "B"
          }else if(a === 12){
            var e = "C"
          }else if(a === 13){
            var e = "D"
          }else if(a === 14){
            var e = "E"
          }else if(a === 15){
            var e = "F"
          }
          if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var e = e+""+b
          }else{
            var e = a+""+b
          }
        }
    // }
    //     //------------u value--------------------//
     
    //     if(blue > 255){
    //         alert("Enter Blue value 0 - 255")
    //     }else {
        if(blue === 0){
          var u = "00"
        }
        if(blue%16 !== 0){
        var a = Math.floor(blue/16)
        var b = Math.floor(blue%16)
        
          if(a < 10){
            var u = a
          }else if(a === 10){
            var u = "A"
          }else if(a === 11){
            var u = "B"
          }else if(a === 12){
            var u = "C"
          }else if(a === 13){
            var u = "D"
          }else if(a === 14){
            var u = "E"
          }else if(a === 15){
            var u = "F"
          }
          if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var UU = u
          }else {
            var UU = u
          }
            
            if(b < 10){
              var u = b
            }else if(b === 10 ){
              var u = "A"
            }else if(b === 11){
              var u = "B"
            }else if(b === 12){
              var u = "C"
            }else if(b === 13){
              var u = "D"
            }else if(b === 14){
              var u = "E"
            }else if(b === 15){
              var u = "F"
            }
            if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var UUU = u
            }else{
              var UUU = u
            }
            var u = UU+""+UUU
        }else {
          var a = Math.round(blue/16)
          var b = Math.round(blue%16)
          if(a === 10){
            var u = "A"
          }else if(a === 11){
            var u = "B"
          }else if(a === 12){
            var u = "C"
          }else if(a === 13){
            var u = "D"
          }else if(a === 14){
            var u = "E"
          }else if(a === 15){
            var u = "F"
          }
          if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var u = u+""+b
          }else{
            var u = a+""+b
          }
        }
    
        //--------------------------------//
        
        return('#'+h+""+e+""+u)
        }
    }


export default RGBtoHEX