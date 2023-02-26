

const stepCheck = document.querySelectorAll('#checked-step li');
const checkMark = document.querySelectorAll('.step-checkmark')
const stepUser  = document.querySelectorAll('.steps');
const btnNxt    = document.querySelector('.nxt-btn');
const btnPrvs   = document.querySelector('.prvs-btn');

let step = 0;
console.log(stepCheck)


// next button event
btnNxt.addEventListener('click', (e)=>{
   
    if(step < stepCheck.length){
        step++;
    } else {
        return;
    }
    nextStep();
    console.log(step);
});
// previous buttton event
btnPrvs.addEventListener('click', (e) =>{
    if(stepCheck.length >= step){
        step--;
    } else {
        return;
    }
    prvsStep();
    console.log(step);
});

function nextStep() {
    switch (step) {
        case 1:
            checkMark[0].classList.toggle('check');// remove the background color to the previous step sidebar
            checkMark[1].classList.toggle('check');// add the background color to the next step sidebar
            stepUser[0].style.display = 'none';// remove the previous step user input container
            stepUser[1].style.display = 'block'; //display the next step user input container
            btnPrvs.style.display = 'block';// display de previous button
        break;
        case 2:
            checkMark[1].classList.toggle('check');
            checkMark[2].classList.toggle('check');
            stepUser[1].style.display = 'none';
            stepUser[2].style.display = 'block';
        break;
        case 3:
            checkMark[2].classList.toggle('check');
            checkMark[3].classList.toggle('check');
            stepUser[2].style.display = 'none';
            stepUser[3].style.display = 'block';
            btnNxt.textContent='Confirm';
        break;
        case 4:
            stepUser[3].style.display = 'none';
            stepUser[4].style.display = 'block';
            btnPrvs.style.display = 'none';
            btnNxt.style.display = 'none';

        break;
        default:
    }
}


function prvsStep() {
    switch (step) {
        case 0:
            checkMark[1].classList.toggle('check');
            checkMark[0].classList.toggle('check');
            stepUser[1].style.display = 'none';
            stepUser[0].style.display = 'block';
            btnPrvs.style.display = 'none';
        break;
        case 1:
            checkMark[2].classList.toggle('check');
            checkMark[1].classList.toggle('check');
            stepUser[2].style.display = 'none';
            stepUser[1].style.display = 'block';
        break;
        case 2:
            checkMark[3].classList.toggle('check');
            checkMark[2].classList.toggle('check');
            stepUser[3].style.display = 'none';
            stepUser[2].style.display = 'block';
            btnNxt.textContent =' Next Step';
        default:
    }
}