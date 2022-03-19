// function warning() {
//     alert(" PLEASE NOTE THAT YOU HAVE JUST 3MINS. \n RELOADING THE PAGE WILL FETCH YOU ZER0. \n \n SUCCESS");
//     document.getElementById("q").style.display="block";
// }

const duration = 5;
let questionIndex = 0;
let question;
let interval;
let passMark = 70
let score = 0
const questions = [

    {
        q: "What is actually electricity?",
        opt: ["A flow of water", "A flow of air", "A flow of electrons", "A flow of atoms"],
        answer: 2,
    },

    {
        q: "Which of the following is not an international organisation?",
        opt: ["FIFA", "NATO", "ASEAN", "FBI"],
        answer: 3,
    },

    {
        q: "Which of the following disorders is the fear of being alone?",
        opt: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
        answer: 0,
    },

    {
        q: "Which of the following is a song by the German heavy metal band “Scorpions”?",
        opt: ["Stairway to Heaven", "Wind of Change", "Don’t Stop Me Now", "Hey Jude"],
        answer: 1,
    },
    {
        q: "What is actually electricity?",
        opt: ["A flow of water", "A flow of air", "A flow of electrons", "A flow of atoms"],
        answer: 2,
    },

    {
        q: "Which of the following is not an international organisation?",
        opt: ["FIFA", "NATO", "ASEAN", "FBI"],
        answer: 3,
    },

    {
        q: "Which of the following disorders is the fear of being alone?",
        opt: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
        answer: 0,
    },

    {
        q: "Which of the following is a song by the German heavy metal band “Scorpions”?",
        opt: ["Stairway to Heaven", "Wind of Change", "Don’t Stop Me Now", "Hey Jude"],
        answer: 1,
    },
    {
        q: "What is actually electricity?",
        opt: ["A flow of water", "A flow of air", "A flow of electrons", "A flow of atoms"],
        answer: 2,
    },

    {
        q: "Which of the following is not an international organisation?",
        opt: ["FIFA", "NATO", "ASEAN", "FBI"],
        answer: 3,
    },

    {
        q: "Which of the following disorders is the fear of being alone?",
        opt: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
        answer: 0,
    },

    {
        q: "Which of the following is a song by the German heavy metal band “Scorpions”?",
        opt: ["Stairway to Heaven", "Wind of Change", "Don’t Stop Me Now", "Hey Jude"],
        answer: 1,
    },

];

function start() {
    document.querySelector('#wrapper').classList.remove('d-none')
    let resultElem = document.querySelector('#result')
    let infoElem = document.querySelector('#info')
    resultElem.classList.add('d-none');
    infoElem.classList.add('d-none');
    renderProgress()
    renderQuestion();
}

function timer() {
    let timeLeft = duration;
    interval = setInterval( function() {
        document.querySelector('#timer').innerHTML = timeLeft;
        if (timeLeft == 0) {
            if (questionIndex < questions.length) {
                mark();
            } else
                displayResult()
        }
        timeLeft--;
    }, 1000)
}

function renderQuestion() {
    if (interval != undefined) clearInterval(interval)

    timer()
    document.querySelector(`#progress-${questionIndex}`).classList.remove('bg-secondary')
    document.querySelector(`#progress-${questionIndex}`).classList.add('bg-primary')
    document.querySelector("#question-info").innerHTML = `Question ${questionIndex + 1}/${questions.length}`
    question = questions[questionIndex];
    document.querySelector("#question").innerHTML = question.q
    let optionsWrapper = document.querySelector("#options")
    optionsWrapper.innerHTML = ''
    let optionIndex = 0
    for (const option of question.opt) {
        optionsWrapper.innerHTML +=
            `<label class="form-check-label">
            <input type="radio" onchange="mark()" class="form-check-input" name="option" class="mb-2" value="${optionIndex}"> ${option}
        </label> <br>`
        optionIndex++
    }
    questionIndex++
}

function displayResult() {
    document.querySelector('#wrapper').style.display = 'none'
    let resultElem = document.querySelector('#result')
    resultElem.classList.remove('d-none');
    let percentageScore = score * 100 / questions.length
    resultElem.innerHTML =
    // <img class="congratulation" src="img/cup.png" alt="Card image">

        `
    <div class="card div1 text-center" style="width:35%">
            <div class="congratulation1">
                <h3>${percentageScore >= passMark ? "Congratulations" : "Oops..."}</h3>
                <p>${ percentageScore >= passMark ? "You did a great job in the test!" : "Failed! You may retake the test"} </p>
            </div>
        </div>
    `
    clearInterval(interval)
    questionIndex = 0;
    timeLeft = duration
}

function mark() {
    let question = questions[questionIndex - 1]
    let checked = document.querySelector('input[name=option]:checked')
    if (checked != undefined && checked.value == question.answer) {
        score++
        document.querySelector(`#progress-${questionIndex - 1}`).classList.remove('bg-primary')
        document.querySelector(`#progress-${questionIndex - 1}`).classList.add('bg-success')
    } else {
        document.querySelector(`#progress-${questionIndex - 1}`).classList.remove('bg-primary')
        document.querySelector(`#progress-${questionIndex - 1}`).classList.add('bg-danger')
    }
    if (questionIndex < questions.length) {
        renderQuestion()
    }else{
        displayResult()
    }
}

function renderProgress() {
    let progress = document.querySelector("#progress")
    progress.innerHTML = ""
    for (let i = 0; i < questions.length; i++) {
        progress.innerHTML +=
            `
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-secondary" id="progress-${i}" style="width:${100 / questions.length}%">
        ${i + 1}
    </div>
    `
    }
}











// var count = 120;
// var interval = setInterval(function(){
//     document.getElementById("dTimer").innerHTML = count;
//     count--;
//     if(count === 0){
//         clearInterval(interval);
//         document.getElementById("dTimer").innerHTML = "done";
//     }
// }, 1000);

