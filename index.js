// document.querySelectorAll('.answer-btn').forEach(function(el) {
//     el.addEventListener('click', function () {
//         console.log('dfsfdfsdf')
//     })
// })





// FUNNEL QUESTIONS

// QUESTION #1 HOW CAN WE HELP YOU?

document.querySelector('.q1-purchase').onclick = () => {
    //Record Answer
    console.log('Purchase')
    // Hide question
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    //Update status bar
    document.querySelector('.completed').style.width = '28%';
}

document.querySelector('.q1-refinance').onclick = () => {
    console.log('Refinance')
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    document.querySelector('.completed').style.width = '28%';
}


// QUESTION #2 LETS GET TO KNOW YOU

document.querySelector('.q2-next-btn').onclick = () => {
    //Grab input info
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

// QUESTION #3 ESTIMATE YOUR CREDIT SCORE

document.querySelector('.q3-excellent').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-good').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-average').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-fair').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-under').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

// QUESTION #4 WHAT IS YOUR EMPLOYMENT STATUS

document.querySelector('.q4-employed').onclick = () => {
    //Grab input info
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-not-employed').onclick = () => {
    //Grab input info
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-self-employed').onclick = () => {
    //Grab input info
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-military').onclick = () => {
    //Grab input info
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-retired').onclick = () => {
    //Grab input info
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

// QUESTION #5 PROPERTY LOCATION?

document.querySelector('.q5-next-btn').onclick = () => {
    //Grab input info
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

// QUESTION #6 PROPERTY TYPE

document.querySelector('.q6-single-family').onclick = () => {
    //Grab input info
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-2to4').onclick = () => {
    //Grab input info
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-condo').onclick = () => {
    //Grab input info
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-town-house').onclick = () => {
    //Grab input info
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-other').onclick = () => {
    //Grab input info
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

// QUESTION #7 DESIRED LOAN AMOUNT

document.querySelector('.q7-submit-btn').onclick = () => {
    // //Grab input info
    // document.querySelector('.q6').classList.remove('active-question')
    // //Show next question
    // document.querySelector('.q7').classList.add('active-question')
    // document.querySelector('.completed').style.width = '98%';
}