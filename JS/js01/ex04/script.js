const scoller = document.getElementsByTagName("p");
function scrollDetect(){
  var lastScroll = 0;

  window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        document.getElementsByTagName("p").innerHTML = "Scrolling DOWN";
      }else{
        lastScroll = currentScroll;
        document.getElementsByTagName("p").innerHTML = "alert('Scrolling UP')";
      }
  };
}


scrollDetect();