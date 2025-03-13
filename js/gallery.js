// # Gallery Code

// ## Accordion code for gallery sections
let accordion = document.getElementsByClassName("accordion");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(event) {
        event.target.classList.toggle('active');
    let panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = "";
    } else {
        panel.style.maxHeight = '100%';
    }
    });
};