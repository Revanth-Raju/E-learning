
function burger(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');    
  }     


  function startCountdown() {
    var digitButtons = document.querySelectorAll('.digit');
    var countdownElement = document.getElementById('countdown');
    var count = 0;
    var durationInSeconds = 1000;
    var totalIterations = durationInSeconds * 1000; // Update every 100 milliseconds

    function updateCountdown() {    
        digitButtons.forEach(function(button, index) {
            button.textContent = (count / Math.pow(10, 3 - index)) % 10 | 0;
        });

        count++;

        if (count > 4145) {
            clearInterval(interval);
        }
    }

    var interval = setInterval(updateCountdown, durationInSeconds * 10000 / totalIterations);
}

window.onload = startCountdown;

// ------------------------------------------==========Accordian==========--------------------------------------------------------------//

let accordian = document.getElementsByClassName('accordian');

let i;

for(i = 0; i < accordian.length; i++){

    accordian[i].addEventListener("click", function(){
        this.classList.toggle("active");

        let panel = this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        }else{
            panel.style.display = "block";
        }
    });
}

// -------------------------====== progress bar =====----------------------------- //

const controller = document.querySelector('input[type=range]');
const radialProgress = document.querySelector('.radialProgress');

const setProgress = progress => {
    const value = `${progress} %`;
    radialProgress.style.setProperty('--progress', value);
    radialProgress.innerHTML = value;
    radialProgress.setAttribute('aria-valuenow', value);
};

setProgress(controller.value);
controller.oninput = () => {
    setProgress(controller.value);
}