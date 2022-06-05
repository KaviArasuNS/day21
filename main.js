let maindiv = document.getElementById("flexbox")

let timerfun = document.getElementById("timerIn");

maindiv.append(timerfun);
document.body.append(maindiv);


function f1() {
  timerfun.innerHTML = "10";
  function f2() {
    timerfun.innerHTML = "9";
    function f3() {
      timerfun.innerHTML = "8";
        function f4(){
          timerfun.innerHTML = "7";
          function f5() {
            timerfun.innerHTML = "6";
            function f6(){
              timerfun.innerHTML = "5";
              function f7(){
                timerfun.innerHTML = "4";
                function f8(){
                  timerfun.innerHTML = "3";
                  function f9(){
                    timerfun.innerHTML = "2";
                    function f10(){
                      timerfun.innerHTML = "1";
                      function f11(){
                        timerfun.innerHTML = " <b>Happy</b> <span>Independence</span> <dd>Day</dd> 🎉";
                        timerfun.style.fontSize = "50px";
                        timerfun.style.fontWeight = "bold";
                      }
                      setTimeout(f11,1000);
                    }
                    setTimeout(f10,1000);
                  }
                  setTimeout(f9,1000);
                }
                setTimeout(f8,1000);
              }
              setTimeout(f7,1000);
            }
            setTimeout(f6, 1000);
          }
          setTimeout(f5,1000);
        }
        setTimeout(f4, 1000);
    }
    setTimeout(f3, 1000);
  }
    setTimeout(f2, 1000);
    
  
}


f1();
