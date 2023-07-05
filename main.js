document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll("video");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
                entry.target.addEventListener('ended', () => {
                    entry.target.currentTime = 0;
                    entry.target.play();
                });
            } else {
                entry.target.pause();
            }
        });
    });
    videos.forEach((video) => {
        observer.observe(video);
    });
});


let currentNumber = "";
let operator = "";
let previousNumber = "";

function display(value) {
    document.getElementById("display2").value += value;
    }

    

    function clearScreen() {
        document.getElementById("display2").value = "";
        } 


        function calculate() {
            var p = document.getElementById("display2").value;
            var q = eval(p);
            document.getElementById("display2").value = q;
            }

//! clock 
            function currentTime() {
                let date = new Date(); 
                let hh = date.getHours();
                let mm = date.getMinutes();
                let ss = date.getSeconds();
                let session = "";
              
                  
                if(hh > 12){
                    session = "";
                 }
              
                 hh = (hh < 10) ? "0" + hh : hh;
                 mm = (mm < 10) ? "0" + mm : mm;
                 ss = (ss < 10) ? "0" + ss : ss;
                  
                 let time = hh + ":" + mm + "" +  " " + session;
              
                document.getElementById("clock").innerText = time; 
                let t = setTimeout(function(){ currentTime() }, 1000); 
              
              }
              
              currentTime();