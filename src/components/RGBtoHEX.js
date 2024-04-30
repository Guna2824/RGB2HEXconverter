
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
             h = a
          }else if(a === 10){
             h = "A"
          }else if(a === 11){
             h = "B"
          }else if(a === 12){
             h = "C"
          }else if(a === 13){
             h = "D"
          }else if(a === 14){
             h = "E"
          }else if(a === 15){
             h = "F"
          }
          
          if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var HH = h
          }else {
             HH = h
          }
            
            if (b < 10){
               h = b
            }else if(b === 10 ){
               h = "A"
            }else if(b === 11){
               h = "B"
            }else if(b === 12){
               h = "C"
            }else if(b === 13){
               h = "D"
            }else if(b === 14){
               h = "E"
            }else if(b === 15){
               h = "F"
            }
            if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var HHH = h
            }else{
               HHH = h
            }
             h = HH+""+HHH
        
        }else {
           a = Math.round(red/16)
           b = Math.round(red%16)
          if(a === 10){
             h = "A"
          }else if(a === 11){
             h = "B"
          }else if(a === 12){
             h = "C"
          }else if(a === 13){
             h = "D"
          }else if(a === 14){
             h = "E"
          }else if(a === 15){
             h = "F"
          }
          if(h === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
             h = h+""+b
          }else{
             h = a+""+b
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
         a = Math.floor(green/16)
         b = Math.floor(green%16)
        
          if(a < 10){
             e = a
          }else if(a === 10){
             e = "A"
          }else if(a === 11){
             e = "B"
          }else if(a === 12){
             e = "C"
          }else if(a === 13){
             e = "D"
          }else if(a === 14){
             e = "E"
          }else if(a === 15){
             e = "F"
          }
          if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var EE = e
          }else {
             EE = e
          }
        
            if(b < 10){
               e = b
            }else if(b === 10 ){
               e = "A"
            }else if(b === 11){
               e = "B"
            }else if(b === 12){
               e = "C"
            }else if(b === 13){
               e = "D"
            }else if(b === 14){
               e = "E"
            }else if(b === 15){
               e = "F"
            }
            if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var EEE = e
            }else{
               EEE = e
            }
             e = EE+""+EEE
        }else {
           a = Math.round(green/16)
           b = Math.round(green%16)
          if(a === 10){
             e = "A"
          }else if(a === 11){
             e = "B"
          }else if(a === 12){
             e = "C"
          }else if(a === 13){
             e = "D"
          }else if(a === 14){
             e = "E"
          }else if(a === 15){
             e = "F"
          }
          if(e === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
             e = e+""+b
          }else{
             e = a+""+b
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
         a = Math.floor(blue/16)
         b = Math.floor(blue%16)
        
          if(a < 10){
             u = a
          }else if(a === 10){
             u = "A"
          }else if(a === 11){
             u = "B"
          }else if(a === 12){
             u = "C"
          }else if(a === 13){
             u = "D"
          }else if(a === 14){
             u = "E"
          }else if(a === 15){
             u = "F"
          }
          if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
            var UU = u
          }else {
             UU = u
          }
            
            if(b < 10){
               u = b
            }else if(b === 10 ){
               u = "A"
            }else if(b === 11){
               u = "B"
            }else if(b === 12){
               u = "C"
            }else if(b === 13){
               u = "D"
            }else if(b === 14){
               u = "E"
            }else if(b === 15){
               u = "F"
            }
            if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
              var UUU = u
            }else{
               UUU = u
            }
             u = UU+""+UUU
        }else {
           a = Math.round(blue/16)
           b = Math.round(blue%16)
          if(a === 10){
             u = "A"
          }else if(a === 11){
             u = "B"
          }else if(a === 12){
             u = "C"
          }else if(a === 13){
             u = "D"
          }else if(a === 14){
             u = "E"
          }else if(a === 15){
             u = "F"
          }
          if(u === ( 'A' || 'B' || 'C' || 'D' || 'E' || 'F')){
             u = u+""+b
          }else{
             u = a+""+b
          }
        }
    
        //--------------------------------//
        
        return('#'+h+""+e+""+u)
        }
    }


export default RGBtoHEX