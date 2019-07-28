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
const noAppt = document.getElementById('noSnapButton');


snapButton.addEventListener('click', function(event){
  const snapBranch = document.getElementById('snapBranch');  
  snapBranch.scrollIntoView({behavior:'smooth'});
});

noAppt.addEventListener('click', function(event){
  const noApptPage = document.getElementById('noApptPage');
  noApptPage.scrollIntoView({behavior:'smooth'});
});
