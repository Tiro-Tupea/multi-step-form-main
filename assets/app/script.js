

const stepCheck = document.querySelectorAll('#checked-step li');
const checkMark = document.querySelectorAll('.step-checkmark')
const stepUser  = document.querySelectorAll('.steps');
const btnNxt    = document.querySelector('.nxt-btn');
const btnPrvs   = document.querySelector('.prvs-btn');

const inputForm = document.querySelector('#input-form');
const userName  = document.querySelector('#name');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const errorMsg  = document.querySelector('.error-msg')

let userVal;
let step = 0;
console.log(errorMsg.textContent);
 
// next button event
btnNxt.addEventListener('click', (e)=>{
    getUserInput();
    if(step < stepCheck.length){
        nextStep();
    } else {
        return;
    }
    
    console.log(step);
});
// previous buttton event
btnPrvs.addEventListener('click', (e) =>{
    if(stepCheck.length >= step){
        prvsStep();
    } else {
        return;
    }
    
    console.log(step);
});

function nextStep() {
    step++;
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
    step--;
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

function getUserInput(val1, val2, val3){
    // ref the user input values
    val1 = userName.value; 
    val2 = userEmail.value;
    val3 = userPhone.value;

    let res1,res2, res3; 
    // inputs test 
    res1 = /^[a-zA-Z]+$/.test(val1); // name 
    res2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val2);// email
    res3 = /^[0-9]+$/.test(val3); // phone

    if (res1 && res2 && res3){
        console.log(val1);
        console.log(val2);
        console.log(val3);
    } else {
        console.log(false);
    }
}

