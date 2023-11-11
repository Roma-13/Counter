let counterValue = 0;

function updateCounter(){
    var counterElement = document.getElementById("counter");
    counterElement.textContent = counterValue;
}

function increaseCounter(){
    counterValue += 1;
    updateCounter()
}

function decreaseCounter(){
    counterValue -= 1;
    updateCounter()
}