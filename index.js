// document.querySelectorAll('.answer-btn').forEach(function(el) {
//     el.addEventListener('click', function () {
//         console.log('dfsfdfsdf')
//     })
// })

document.querySelector('.q1-yes').onclick = () => {
    //Record Answer
    console.log('yes')
    // Hide question
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    //Update status bar
    document.querySelector('.completed').style.width = '20%';
}

document.querySelector('.q1-no').onclick = () => {
    console.log('no')
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    document.querySelector('.completed').style.width = '20%';
}

document.querySelector('.next-button').onclick = () => {
    //Grab input info
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '40%';
}

document.querySelector('.q3-yes').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '60%';
}

document.querySelector('.q3-no').onclick = () => {
    //Grab input info
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '60%';
}