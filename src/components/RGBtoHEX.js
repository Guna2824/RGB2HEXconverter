
function RGBtoHEX(rgb) {

  const rgbPattern = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
  const rgbValue = rgbPattern.test(rgb)

    if(rgbValue === false ){
      return (alert("Enter RGB value 0 - 255"),"#ffffff")
      
    }else{

        const match = rgb.match(/(\d+(\.\d+)?)/g).map(Number);
        const red = match[0]
        const green = match[1]
        const blue = match[2]
        
        //-----------h value-----------------//

        if(red > 255 || red < 0){
         alert('Enter red value 0 - 255')
        }
         let h = red.toString(16).toUpperCase();

         if(h.length === 1){
            h = '0'+h
         }

         //-----------e value-----------------//

         if(green > 255 || red < 0){
            alert('Enter red value 0 - 255')
           }
            let e = green.toString(16).toUpperCase();
   
            if(e.length === 1){
               e = '0'+e
            }

             //-----------e value-----------------//

         if(blue > 255 || red < 0){
            alert('Enter red value 0 - 255')
           }
            let u = blue.toString(16).toUpperCase();
   
            if(u.length === 1){
               u = '0'+u
            }
            return '#' + h + '' + e + '' + u
         }
      }


export default RGBtoHEX