let hourHand = document.querySelector(".hour")
let mintHand = document.querySelector(".mint")
let secondHand = document.querySelector(".second")


setInterval(() => {
    
    let time = new Date();

    let hour = time.getHours();
    let mint = time.getMinutes();
    let second = time.getSeconds();

    let hourrotation = 30*hour + mint/2;
    let mintrotation = 6*mint;
    let secondrotation = 6*second;

    secondHand.style.transform = `rotate(${secondrotation}deg)`
    mintHand.style.transform = `rotate(${mintrotation}deg)`
    hourHand.style.transform = `rotate(${hourrotation}deg)`

},1000);

