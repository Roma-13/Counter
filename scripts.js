    let counterValue = 0;

    function updateCounter() {
        var counterElement = document.getElementById("counter");
        counterElement.textContent = counterValue;

        const maxLimit = 10;
        if (counterValue > maxLimit){
            alert("10 ზე მეტი რიცხვის მითითება შეუძლებელია")

        }

        const minLimit = 0;
        if (counterValue < minLimit){
            alert("0 ზე ნაკლები რიცხვის მითითება შეუძლებელია")
        }
    }

    function increaseCounter() {
        counterValue += 2;
        updateCounter()
        let randomColor = getRandomColor();
        document.body.style.color = randomColor;

    }

    function decreaseCounter() {
        counterValue -= 2;
        updateCounter()
        let randomColor = getRandomColor();
        document.body.style.color = randomColor;

    }

    function changeColor() {
        let counterElement = document.getElementById('counter');
        let randomColor = getRandomColor();
        counterElement.style.color = randomColor;
      }
      
      function getRandomColor() {
        const letters = '0123456789ABCDEF'; 
        let color = '#'; 
        for (let i = 0; i < 6; i++){ 
           color += letters[Math.floor(Math.random() * 16)]; 
        }
        return color;
      }