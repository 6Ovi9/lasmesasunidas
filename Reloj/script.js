setInterval(setClock, 1000)

const hourHand = document.querySelector("[data-hour-hand]")

function setClock(){
    const currentDate = new Date()
    const hoursRatio = currentDate.getHours() /24
    setRotation(hourHand, hoursRatio )
}  

function setRotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()