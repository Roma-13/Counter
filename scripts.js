    let counterValue = 0;

    function updateCounter(){
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

    function increaseCounter(){
        counterValue += 2;
        updateCounter()
        document.body.style.color = 'green';

    }

    function decreaseCounter(){
        counterValue -= 2;
        updateCounter()
        document.body.style.color = 'red';

    }