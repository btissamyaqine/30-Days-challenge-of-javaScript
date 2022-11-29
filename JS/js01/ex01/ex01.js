// function progress(){
//   if(i==0){
//     i=1;
//     var element = document.getElementById('progress-bar')
//     let width = 10;
//     var id = setInterval(fram, 5000);
//     function fram(){
//       if(width =10){
//         document.getElementsByTagName('div').style.color = 'red';

//       }else if(width >= 100){
//         clearInterval(id);
//         i=0;
//       }else{
//         element.style.width = width + "%"
//       }
    
//     }
//   }
// }
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 50);
    function frame() {
      if(width <10){
        $(this).css("background-color", "red");
      } else
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        
      }
    }
  }
}