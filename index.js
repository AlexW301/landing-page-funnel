// document.querySelectorAll('.answer-btn').forEach(function(el) {
//     el.addEventListener('click', function () {
//         console.log('dfsfdfsdf')
//     })
// })


// FORM DATA

let formData = []
formData.length = 7;


// FUNNEL QUESTIONS

// QUESTION #1 HOW CAN WE HELP YOU?

document.querySelector('.q1-purchase').onclick = () => {
    //Record Answer
    console.log('Purchase')
    formData[0] = 'Purchase'
    // Hide question
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    //Update status bar
    document.querySelector('.completed').style.width = '28%';
}

document.querySelector('.q1-refinance').onclick = () => {
    //Record Answer
    console.log('Refinance')
    formData[0] = 'Refinance'
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    document.querySelector('.completed').style.width = '28%';
}


// QUESTION #2 LETS GET TO KNOW YOU

document.querySelector('.q2-next-btn').onclick = () => {
    //Grab input info
    let fullName = document.querySelector('.name-input').value
    let email = document.querySelector('.email-input').value
    let phone = document.querySelector('.phone-input').value

    if (fullName.indexOf(' ') !== -1 && email.indexOf('@') !== -1) {
        //Split name
        let nameArr = fullName.split(" ")
        let firstName = nameArr[0]
        let lastName = nameArr[1] 
        formData[1] = [firstName, lastName, email, phone]
        //
        document.querySelector('.q2').classList.remove('active-question')
        //Show next question
        document.querySelector('.q3').classList.add('active-question')
        document.querySelector('.completed').style.width = '42%';
    } if (fullName.indexOf(' ') === -1) {
        document.querySelector('.warning-text-name').style.display = 'block'
    } if (email.indexOf('@') === -1) {
        document.querySelector('.warning-text-email').style.display = 'block'
    }
}

document.querySelector('.name-input').onclick = () => {
    document.querySelector('.warning-text-name').style.display = 'none'
}

document.querySelector('.email-input').onclick = () => {
    document.querySelector('.warning-text-email').style.display = 'none'
}

// QUESTION #3 ESTIMATE YOUR CREDIT SCORE

document.querySelector('.q3-excellent').onclick = () => {
    //Record Answer
    formData[2] = 'Excellent 740+'
    //
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-good').onclick = () => {
    //Grab input info
    formData[2] = 'Good 700-739'
    //
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-average').onclick = () => {
    //Grab input info
    formData[2] = 'Average 660-699'
    //
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-fair').onclick = () => {
    //Grab input info
    formData[2] = 'Fair 600-659'
    //
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

document.querySelector('.q3-under').onclick = () => {
    //Grab input info
    formData[2] = 'Under 600'
    //
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

// QUESTION #4 WHAT IS YOUR EMPLOYMENT STATUS

document.querySelector('.q4-employed').onclick = () => {
    //Grab input info
    formData[3] = 'Employed'
    //
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-not-employed').onclick = () => {
    //Grab input info
    formData[3] = 'Not employed'
    //
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-self-employed').onclick = () => {
    //Grab input info
    formData[3] = 'Self employed'
    //
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-military').onclick = () => {
    //Grab input info
    formData[3] = 'Military'
    //
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

document.querySelector('.q4-retired').onclick = () => {
    //Grab input info
    formData[3] = 'Retired'
    //
    document.querySelector('.q4').classList.remove('active-question')
    //Show next question
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

// QUESTION #5 PROPERTY LOCATION?

document.querySelector('.q5-next-btn').onclick = () => {
    //Grab input info
    let location = document.querySelector('.location-input').value
    if (location != '') {
        formData[4] = location
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
    }
}

document.querySelector('.not-sure-btn').onclick = () => {
    //Grab input info
    formData[4] = 'Not Sure'
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

// QUESTION #6 PROPERTY TYPE

document.querySelector('.q6-single-family').onclick = () => {
    //Grab input info
    formData[5] = 'Single Family'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-2to4').onclick = () => {
    //Grab input info
    formData[5] = '2-4 unit'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-condo').onclick = () => {
    //Grab input info
    formData[5] = 'Condo'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-town-house').onclick = () => {
    //Grab input info
    formData[5] = 'Town House'
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-other').onclick = () => {
    //Grab input info
    formData[5] = 'Other'
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

// QUESTION #7 DESIRED LOAN AMOUNT

document.querySelector('.q7-submit-btn').onclick = () => {
    //Grab input info
    let loanAmount = document.querySelector('.amount-input').value
    if (loanAmount != '') {
    //update last item in array
    formData[6] = loanAmount
    //Send the data to firebase
    firebase.firestore().collection("completed-funnels").add({
        firstName: formData[1][0],
        lastName: formData[1][1],
        email: formData[1][2],
        phone: formData[1][3],
        purchaseOrRefi: formData[0],
        credit: formData[2],
        employment: formData[3],
        location: formData[4],
        propertyType: formData[5],
        loanAmount: formData[6],
        date: Date()
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    //Go to the next screen
    document.querySelector('.q7').classList.remove('active-question')
    //Show next question
    document.querySelector('.q8').classList.add('active-question')
    document.querySelector('.completed').style.width = '100%';
    }
}

// QUESTION #8 APPLY NOW BUTTON

document.querySelector('.q8-apply-btn').onclick = () => {
    window.location.href = 'https://www.blink.mortgage/app/signup/p/premiermortgagelendingllc/michaelcomerfordg'
}

// BACK BUTTONS

// Q2 BACK

document.querySelector('.q2-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q2').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q1').classList.add('active-question')
    document.querySelector('.completed').style.width = '14%';
}

// Q3 BACK

document.querySelector('.q3-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q3').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q2').classList.add('active-question')
    document.querySelector('.completed').style.width = '28%';
}

// Q4 BACK

document.querySelector('.q4-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q4').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

// Q5 BACK

document.querySelector('.q5-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q5').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

// Q6 BACK

document.querySelector('.q6-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q6').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q5').classList.add('active-question')
    document.querySelector('.completed').style.width = '70%';
}

// Q7 BACK

document.querySelector('.q7-back').onclick = () => {
    //REMOVE CURRENT SCREEN
    document.querySelector('.q7').classList.remove('active-question')
    //ADD PREVIOUS SCREEN
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}