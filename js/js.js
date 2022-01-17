function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Hide response"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "View response"
        ev.setAttribute('data-show', "true"); 
    }
}