
const duration = 5;
let questionIndex = 0;
let question;
let interval;
let passMark = 70
let score = 0;
let currentTime = 0;

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

function restart() {
    currentTime = 0;

    document.querySelector('#caution').classList.remove('d-none');  
    document.querySelector('#info').classList.remove('d-none');
    document.querySelector('#result').classList.add('d-none');
    document.querySelector('#info').classList.add('d-block');  
    document.querySelector('#caution').classList.add('d-block');  
}

function start() {
    document.querySelector('#wrapper').classList.remove('d-none')
    let resultElem = document.querySelector('#result')
    let infoElem = document.querySelector('#info')
    let cautionElem = document.querySelector('#caution')
    resultElem.classList.add('d-none');
    infoElem.classList.add('d-none');
    cautionElem.classList.add('d-none');
    renderProgress();
    renderQuestion();
}

function timer(additonalT) {
    
    let timeLeft = additonalT + duration;
    // console.log("XX"+xx);
    // console.log("Timeleft"+timeLeft);
    interval = setInterval( function() {
        document.querySelector('#timer').innerHTML = timeLeft;
        if (timeLeft == 0) {
            if (questionIndex < questions.length) {
                mark();
            } else
                displayResult()
        }
    
        timeLeft--;
        currentTime=timeLeft;
        // console.log(timeLeft);
    }, 1000)
    // console.log(timeLeft);
}

function renderQuestion() {
    if (interval != undefined) clearInterval(interval)

    timer(currentTime)
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
    document.querySelector('#wrapper').classList.add("d-none")
    let resultElem = document.querySelector('#result')
    resultElem.classList.remove('d-none');
    let percentageScore = score * 100 / questions.length
    resultElem.innerHTML =
        `
    <div class="div1 text-center mt-3" style="width:45vh">
        <span>${percentageScore >= passMark ? `<img class="congratulationF" src="img/cup.png" alt="Card image"`  : `<img class="congratulationF" src="img/failed.jpeg" alt="Card image"`}></span>
            <div class="congratulation1 mt-3">
                <h3>${percentageScore >= passMark ? "Congratulations" : "Oops..."}</h3>
                <p>${ percentageScore >= passMark ? "You did a great job in the test!" : "Failed! You may retake the test"}</p>
                <div class="mt-2">
                    <button class="shape2" onclick="restart()"><strong>RESTART</strong></button>
                </div>
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
    }
        // console.log("current"+currentTime);
    else{
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