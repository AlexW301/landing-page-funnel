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
    formData[0] = 'Refinance'
    document.querySelector('.q1').classList.remove('active-question')
    //Show next question
    document.querySelector('.q2').classList.add('active-question')
    document.querySelector('.completed').style.width = '28%';
}

// QUESTION #6 PROPERTY TYPE #2

document.querySelector('.q2-single-family').onclick = () => {
    //Grab input info
    formData[1] = 'Single Family'
    //
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

document.querySelector('.q2-2to4').onclick = () => {
    //Grab input info
    formData[1] = '2-4 unit'
    //
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

document.querySelector('.q2-condo').onclick = () => {
    //Grab input info
    formData[1] = 'Condo'
    //
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

document.querySelector('.q2-town-house').onclick = () => {
    //Grab input info
    formData[1] = 'Town House'
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

document.querySelector('.q2-other').onclick = () => {
    //Grab input info
    formData[1] = 'Other'
    document.querySelector('.q2').classList.remove('active-question')
    //Show next question
    document.querySelector('.q3').classList.add('active-question')
    document.querySelector('.completed').style.width = '42%';
}

// QUESTION #5 PROPERTY LOCATION?  #3

document.querySelector('.q3-next-btn').onclick = () => {
    //Grab input info
    let location = document.querySelector('.location-input').value
    if (location != '') {
        formData[2] = location
        document.querySelector('.q3').classList.remove('active-question')
        //Show next question
        document.querySelector('.q4').classList.add('active-question')
        document.querySelector('.completed').style.width = '56%';
    }
}

document.querySelector('.not-sure-btn').onclick = () => {
    //Grab input info
    formData[2] = 'Not Sure'
    document.querySelector('.q3').classList.remove('active-question')
    //Show next question
    document.querySelector('.q4').classList.add('active-question')
    document.querySelector('.completed').style.width = '56%';
}

// QUESTION #4 

document.querySelector('.q4-next-btn').onclick = () => {
    //Grab input info
    let loanAmount = document.querySelector('.amount-input').value
    if (loanAmount != '') {
        //update last item in array
        formData[3] = loanAmount
        //Go to the next screen
        document.querySelector('.q4').classList.remove('active-question')
        //Show next question
        document.querySelector('.q5').classList.add('active-question')
        document.querySelector('.completed').style.width = '70%';
    }
}

// QUESTION #4 WHAT IS YOUR EMPLOYMENT STATUS #5

document.querySelector('.q5-employed').onclick = () => {
    //Grab input info
    formData[4] = 'Employed'
    //
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

document.querySelector('.q5-not-employed').onclick = () => {
    //Grab input info
    formData[4] = 'Not employed'
    //
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

document.querySelector('.q5-self-employed').onclick = () => {
    //Grab input info
    formData[4] = 'Self employed'
    //
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

document.querySelector('.q5-military').onclick = () => {
    //Grab input info
    formData[4] = 'Military'
    //
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}

document.querySelector('.q5-retired').onclick = () => {
    //Grab input info
    formData[4] = 'Retired'
    //
    document.querySelector('.q5').classList.remove('active-question')
    //Show next question
    document.querySelector('.q6').classList.add('active-question')
    document.querySelector('.completed').style.width = '84%';
}


// QUESTION #3 ESTIMATE YOUR CREDIT SCORE #6

document.querySelector('.q6-excellent').onclick = () => {
    //Record Answer
    formData[5] = 'Excellent 740+'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-good').onclick = () => {
    //Grab input info
    formData[5] = 'Good 700-739'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-average').onclick = () => {
    //Grab input info
    formData[5] = 'Average 660-699'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-fair').onclick = () => {
    //Grab input info
    formData[5] = 'Fair 600-659'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}

document.querySelector('.q6-under').onclick = () => {
    //Grab input info
    formData[5] = 'Under 600'
    //
    document.querySelector('.q6').classList.remove('active-question')
    //Show next question
    document.querySelector('.q7').classList.add('active-question')
    document.querySelector('.completed').style.width = '98%';
}



// QUESTION #2 LETS GET TO KNOW YOU #7

document.querySelector('.q7-submit-btn').onclick = () => {
    //Grab input info
    let fullName = document.querySelector('.name-input').value
    let email = document.querySelector('.email-input').value
    let phone = document.querySelector('.phone-input').value

    if (fullName.indexOf(' ') !== -1 && email.indexOf('@') !== -1) {
        //Split name
        let nameArr = fullName.split(" ")
        let firstName = nameArr[0]
        let lastName = nameArr[1]
        formData[6] = [firstName, lastName, email, phone]
        //
        document.querySelector('.completed').style.width = '100%';
        //Send the data to firebase
        firebase.firestore().collection("completed-funnels").add({
            firstName: formData[6][0],
            lastName: formData[6][1],
            email: formData[6][2],
            phone: formData[6][3],
            purchaseOrRefi: formData[0],
            propertyType: formData[1],
            location: formData[2],
            loanAmount: formData[3],
            employment: formData[4],
            credit: formData[5],
            date: Date()
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // GO TO FINISH PAGE
            window.location.href = '/finished.html'
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });


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