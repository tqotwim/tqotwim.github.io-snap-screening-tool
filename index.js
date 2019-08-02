const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
});
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
});
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
});


const snapButton = document.getElementById('snapButton');
snapButton.addEventListener('click', function(event){
  const snapBranch = document.getElementById('snapBranch');  
  snapBranch.scrollIntoView();
});

const newAppButton = document.getElementById('new-app');
newAppButton.addEventListener('click', function(event){
  const fourDays = document.getElementById('four-days');  
  fourDays.scrollIntoView();
});

const expeditedButton = document.getElementById("expedited-button");
expeditedButton.addEventListener('click', function(event){
  const elseExpedited = document.getElementById("else-expedited-page");
  elseExpedited.scrollIntoView();
});

const notExpeditedButton = document.getElementById("not-expedited-button");
notExpeditedButton.addEventListener('click', function(event){
  const elseNotExpedited = document.getElementById("else-not-expedited-page");
  elseNotExpedited.scrollIntoView();
});

const fourDaysElseButton = document.getElementById("four-days-else-button");
fourDaysElseButton.addEventListener('click', function(event){
  const fourDaysElse = document.getElementById("four-days-else");
  fourDaysElse.scrollIntoView();
})


let noAppt = document.querySelectorAll(".no-appt-button");
noAppt.forEach((button) => {
  button.addEventListener('click', () => {
    const noApptPage = document.getElementById("no-appt-page");
    noApptPage.scrollIntoView({behavior:'smooth'});
  })
});

let restartButtons = document.querySelectorAll(".restart-button");
restartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const top = document.getElementById("top");
    top.scrollIntoView();
  });
});



