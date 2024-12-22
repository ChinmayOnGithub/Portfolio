document.addEventListener('DOMContentLoaded', () => {

    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');
    const clearResponseBtn = document.getElementById('clear-response');

    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
            marks: 1,
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
            marks: 1.5,
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
            marks: 2,
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let totalMarks = 0;
    let hasAnswered = false;






    startBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');

        showQuestion();
    }

    function showQuestion() {
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;

        choicesList.innerHTML = ""; // clear prev choices

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => selectAnswer(choice)); // here to pass the parameter we used callback
            // if this call back is not used and directly ('click', selectAnswer(choice)) is written like this
            // then the function is executed immediately which we don't want
            choicesList.appendChild(li);

        });
        hasAnswered = false;
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        const individualMarks = questions[currentQuestionIndex].marks;
        if (!hasAnswered) {
            if (choice === correctAnswer) {
                score += individualMarks;
            }
            hasAnswered = true;
        }

        Array.from(choicesList.children).forEach(li => li.classList.remove('selected'));


        const selectedLi = Array.from(choicesList.children).find(li => li.textContent === choice);
        if (selectedLi) {
            selectedLi.classList.add('selected');
        }

        nextBtn.classList.remove('hidden');
    }



    // function submitResponse() {

    // }

    clearResponseBtn.addEventListener('click', () => {
        if (hasAnswered) {
            const individualMarks = questions[currentQuestionIndex].marks;
            clearResponse(individualMarks);
        }
    })

    function clearResponse(individualMarks) {
        hasAnswered = false;
        score -= individualMarks;

    }

    nextBtn.addEventListener('click', () => {
        if (!hasAnswered) return;
        currentQuestionIndex++;
        hasAnswered = false;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    function calculateTotalMarks() {
        totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
    }

    function showResult() {
        resultContainer.classList.remove('hidden');
        questionContainer.classList.add('hidden')
        calculateTotalMarks();
        scoreDisplay.textContent = `${score} out of ${totalMarks}`;
    }

    restartBtn.addEventListener('click', restartQuiz);

    function restartQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        totalMarks = 0;
        startQuiz();
    }
})