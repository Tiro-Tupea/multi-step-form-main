

const stepCheck = document.querySelectorAll('#checked-step li');
const checkMark = document.querySelectorAll('.step-checkmark')
const stepUser  = document.querySelectorAll('.steps');
const btnNxt    = document.querySelector('.nxt-btn');
const btnPrvs   = document.querySelector('.prvs-btn');

const errorMsg  = document.querySelector('.error-msg');

const addOn     = document.querySelectorAll('#pack-check');



addOn.forEach(elem =>{
    elem.addEventListener('click', (e)=>{
        if(elem.checked == true){
            elem.parentElement.style.backgroundColor='hsl(217, 100%, 97%)';
            console.log(elem.parentElement.textContent);
        }
    });
})
    
let step = 0;


switchYeartly();


 
// next button event
btnNxt.addEventListener('click', (e)=>{
    e.preventDefault();

    getUserInput();
    getUserPlan();
    console.log();
});


// previous buttton event
btnPrvs.addEventListener('click', (e) =>{

    prvsStep();
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

    const inputForm = document.querySelectorAll('#input-form input')
    const userName  = document.querySelector('#name');
    const userEmail = document.querySelector('#email');
    const userPhone = document.querySelector('#phone');

    // ref the user input values
    val1 = userName.value; 
    val2 = userEmail.value;
    val3 = userPhone.value;

    let res1,res2, res3; 
    // inputs test 
    res1 = /^[a-zA-Z]+$/.test(val1); // name 
    res2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val2);// email
    res3 = /^[0-9]+$/.test(val3); // phone

    if (res1 && res2 && res3 !== ''){
        console.log(val1);
        console.log(val2);
        console.log(val3);
        nextStep();
    } else {
        inputForm.forEach(elem =>{
            if (elem.value == ''){
            elem.previousElementSibling.classList.toggle("active");// display the field error message
            console.log('error');
            return;
            }
        }); 
    }
}

function getUserPlan (){
    const userPlans = document.querySelectorAll('.plans');


    userPlans.forEach(elem =>{
        
        elem.addEventListener('click', (e)=>{

            elem = e.currentTarget;
            elem.classList.toggle('selected');

            if(elem.clicked == undefined){
                elem.clicked = elem.textContent;
            }else{
                elem.clicked = !elem.clicked;
                return;
            }
        
        console.log(elem.clicked);
        });
    });
}

//toggle the switch button to yearly 
function switchYeartly(){
    const swtichPlan= document.querySelector('.switch-container input');
    const pricePlan = document.querySelectorAll('.subs-price .price');
    const bonus     = document.querySelectorAll('.bonus');
    const pricePack = document.querySelectorAll('.packages .price');

        swtichPlan.addEventListener('click', (e)=>{
        if(swtichPlan.checked == true){
            document.querySelector('#yearly').style.color='hsl(213, 96%, 18%)';
            document.querySelector('#monthly').style.color='hsl(231, 11%, 63%)';
            pricePlan[0].textContent ='$90/yr';
            pricePlan[1].textContent ='$120/yr';
            pricePlan[2].textContent ='$150/yr';
            pricePack[0].textContent = '+$10/yr';
            pricePack[1].textContent = '+$20/yr';
            pricePack[2].textContent = '+$30/yr';
            bonus.forEach(elem =>{
                elem.style.display='block';
            });

        }else {
            document.querySelector('#yearly').style.color='hsl(231, 11%, 63%)';
            document.querySelector('#monthly').style.color='hsl(213, 96%, 18%)';
            pricePlan[0].textContent ='$9/mo';
            pricePlan[1].textContent ='$12/mo';
            pricePlan[2].textContent ='$15/mo';
            pricePack[0].textContent = '+$1/mo';
            pricePack[1].textContent = '+$2/mo';
            pricePack[2].textContent = '+$3/mo';
            bonus.forEach(elem =>{
                elem.style.display='none';
            });
        }
        
    });
}
